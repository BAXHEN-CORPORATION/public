import React from "react";
import { render } from "@testing-library/react";
import { BasicDetails } from "./details.composition";
import { title } from "./test";

it("should render with the correct summary text", () => {
  const { getByText } = render(<BasicDetails />);
  const rendered = getByText(title);
  expect(rendered).toBeTruthy();
});
