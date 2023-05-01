import React from "react";
import { render } from "@testing-library/react";
import { BasicFancyUpload } from "./fancy-upload.composition";

describe("FancyUpload", () => {
  it("should render with the correct default title", () => {
    const { getByText } = render(<BasicFancyUpload />);
    const rendered = getByText("Upload a File");
    expect(rendered).toBeTruthy();
  });
});
