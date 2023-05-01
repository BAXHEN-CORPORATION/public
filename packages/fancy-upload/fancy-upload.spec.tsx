import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BasicFancyUpload } from "./fancy-upload.composition";
import { RenderResult } from "@testing-library/react";

describe("FancyUpload", () => {
  let file: File;

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

    // const uploadedFile = getByText("chucknorris.png");

    // const input = getByTestId("file") as HTMLInputElement;

    // expect(input.files?.[0].name).toBe("chucknorris.png");
    // expect(input.files?.length).toBe(1);
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
  it.todo(
    "should show a upload button choosing a file which when clicked call the upload callback passing the selected files"
  );
});
