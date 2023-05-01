import React from "react";
import { render } from "@testing-library/react";
import { BasicFancyUploadModal } from "./fancy-upload-modal.composition";

describe("FancyUploadModal", () => {
  it("should render the upload modal when the prop open is true", () => {
    const { getByText } = render(<BasicFancyUploadModal />);

    expect(getByText(/Upload a File/)).toBeDefined();
  });
  it("should close the upload modal when the close icon in the modal header is clicked", () => {
    const { getByTestId, getByText } = render(<BasicFancyUploadModal />);

    const closeIcon = getByTestId("CloseIcon");

    closeIcon.click();

    expect(getByText(/Upload a File/)).not.toBeDefined();
  });
});
