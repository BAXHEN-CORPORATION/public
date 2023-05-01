import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BasicFancyUpload } from "./fancy-upload.composition";
import { RenderResult } from "@testing-library/react";
import { act } from "@testing-library/react";

describe("FancyUpload", () => {
  let file: File;

  const callbackSuccess = (file: File, updateStatus) => {
    setTimeout(() => {
      updateStatus("success");
    }, 1000);
  };
  const callbackError = (file: File, updateStatus) => {
    setTimeout(() => {
      updateStatus("error");
    }, 1000);
  };

  beforeEach(() => {
    file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
  });

  it("should render with the correct default title", () => {
    const { getByText } = render(<BasicFancyUpload />);
    const rendered = getByText("Upload a File");
    expect(rendered).toBeTruthy();
  });

  it("should render with the correct default upload icon", () => {
    const { getByTestId } = render(<BasicFancyUpload />);
    const rendered = getByTestId("CloudUploadIcon");
    expect(rendered).toBeTruthy();
  });

  it("should render with the correct default description", () => {
    const { getByText } = render(<BasicFancyUpload />);
    const rendered = getByText(/Select a file/);
    expect(rendered).toBeTruthy();
  });

  it("should render a choose file button with the correct default label", () => {
    const { getByText } = render(<BasicFancyUpload />);
    const rendered = getByText(/Choose File/);
    expect(rendered).toBeTruthy();
  });

  it("should hide the choose file button after choosing a file", async () => {
    const { queryByText, getByTestId } = render(<BasicFancyUpload />);

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    expect(queryByText(/Choose File/)).toBeNull();
  });
  it("should show the filename, remove icon, the default icon and the upload button after choosing a file", async () => {
    const { getByText, getByTestId } = render(<BasicFancyUpload />);

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const fileIcon = getByTestId("InsertDriveFileIcon");
    const closeIcon = getByTestId("CloseIcon");
    const rendered = getByText(file.name);
    const uploadButton = getByText("Upload");

    expect(uploadButton).toBeTruthy();
    expect(fileIcon).toBeTruthy();
    expect(closeIcon).toBeTruthy();
    expect(rendered).toBeTruthy();
  });
  it("should remove the file and the upload button when the files's remove icon is clicked, and show choose file button", async () => {
    const { queryByText, getByTestId, queryByTestId } = render(
      <BasicFancyUpload />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    let closeIcon = queryByTestId("CloseIcon");

    expect(closeIcon).toBeTruthy();

    await waitFor(() => fireEvent.click(closeIcon as HTMLElement));

    const fileIcon = queryByTestId("InsertDriveFileIcon");
    closeIcon = queryByTestId("CloseIcon");
    const rendered = queryByText(file.name);
    const uploadButton = queryByText("Upload");

    expect(uploadButton).toBeNull();
    expect(fileIcon).toBeNull();
    expect(closeIcon).toBeNull();
    expect(rendered).toBeNull();
  });

  it("should start the uploading after upload button is clicked, show the default uploading label, default description and progress bar", async () => {
    const mockFn = jest.fn(callbackSuccess);
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));

    const title = getByText("Uploading...");
    const description = getByText(
      "Just give us a moment to process your file."
    );
    const progressBar = getByTestId("progress-bar");

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
    expect(progressBar).toBeTruthy();

    await waitFor(async () => findByText("Upload Successful!"));
  });

  it("should call the upload callback when upload button is clicked passing the file as fisrt argument and the callback to update the status as second argument", async () => {
    const mockFn = jest.fn(callbackSuccess);
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));
    await waitFor(() => findByText("Upload Successful!"));

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn.mock.calls[0][0]).toBe(file);
    expect(typeof mockFn.mock.calls[0][1]).toBe("function");
  });

  it("should show success default title, description and actions after uploading with success", async () => {
    const mockFn = jest.fn(callbackSuccess);
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));

    await waitFor(async () => findByText("Upload Successful!"));

    const title = getByText("Upload Successful!");
    const description = getByText(
      "Your file has been uploaded. You can copy the link to your clipboard."
    );

    const copyAction = getByText("Copy Link");
    const doneAction = getByText("Done");

    expect(copyAction).toBeTruthy();
    expect(doneAction).toBeTruthy();
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("should call the copy callback when clicked", async () => {
    const mockFn = jest.fn(callbackSuccess);
    const mockCopyFn = jest.fn(() => {});
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} onCopy={mockCopyFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));

    await waitFor(async () => findByText("Upload Successful!"));

    const copyAction = getByText("Copy Link");

    copyAction.click();

    expect(mockCopyFn.mock.calls.length).toBe(1);
  });
  it("should call the done callback when clicked and show title, description and button to choose a file", async () => {
    const mockFn = jest.fn(callbackSuccess);
    const mockDoneFn = jest.fn(() => {});
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} onDone={mockDoneFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));

    await waitFor(async () => findByText("Upload Successful!"));

    const doneAction = getByText("Done");

    act(() => {
      doneAction.click();
    });

    await waitFor(async () => findByText("Choose File"));

    const title = getByText(/Choose File/);
    const description = getByText("Select a file to upload from your computer");

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();

    expect(mockDoneFn.mock.calls.length).toBe(1);
  });

  it("should show error default title, description and actions after uploading with error", async () => {
    const mockFn = jest.fn(callbackError);
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));

    await waitFor(async () => findByText("Oops!"));

    const title = getByText("Oops!");
    const description = getByText(
      "Your file could not be uploaded due to an error. Try uploading it again?"
    );

    const retryAction = getByText("Retry");
    const cancelAction = getByText("Cancel");

    expect(retryAction).toBeTruthy();
    expect(cancelAction).toBeTruthy();
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it("should call the upload callback again when the retry button is clicked", async () => {
    const mockFn = jest.fn(callbackError);
    const { getByText, getByTestId, findByText } = render(
      <BasicFancyUpload onUpload={mockFn} />
    );

    const input = getByTestId("file");

    await waitFor(() =>
      fireEvent.change(input, {
        target: { files: [file] },
      })
    );

    const uploadButton = getByText("Upload");

    await waitFor(() => fireEvent.click(uploadButton as HTMLElement));

    await waitFor(async () => findByText("Oops!"));

    const retryAction = getByText("Retry");

    retryAction.click();

    expect(mockFn.mock.calls.length).toBe(2);
  });
  it.todo("should call the done callback when clicked");
});
