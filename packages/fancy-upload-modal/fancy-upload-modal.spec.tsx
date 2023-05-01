import React from "react";
import { render } from "@testing-library/react";
import { BasicFancyUploadModal } from "./fancy-upload-modal.composition";

describe("FancyUploadModal", () => {
  it("should render the upload modal when the prop open is true", () => {
    const { getByText } = render(<BasicFancyUploadModal />);
  });
});
