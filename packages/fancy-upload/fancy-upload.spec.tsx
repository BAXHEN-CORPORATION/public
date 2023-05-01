import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BasicFancyUpload } from "./fancy-upload.composition";

describe("FancyUpload", () => {
  let file;

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
  it.todo(
    "should show the filename and the default icon after choosing a file"
  );
  it.todo(
    "should show a cancel icon after choosing a file which when clicked remove the selected file"
  );
  it.todo(
    "should show a upload button choosing a file which when clicked call the upload callback passing the selected files"
  );
});
