import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BasicFancyUpload } from "./fancy-upload.composition";

describe("FancyUpload", () => {
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
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const { getByText, getByTestId } = render(<BasicFancyUpload />);
    const rendered = getByText(/Choose File/);

    await waitFor(() =>
      fireEvent.change(rendered, {
        target: { files: [file] },
      })
    );

    const renderedAfterChoosing = getByText(/Choose File/);

    expect(renderedAfterChoosing).not.toBeTruthy();

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
