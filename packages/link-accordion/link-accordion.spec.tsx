import React from "react";
import { render } from "@testing-library/react";
import { BasicLinkAccordion } from "./link-accordion.composition";
import { title } from "./test/data";

it("should render with the correct title text", () => {
  const { getByText } = render(<BasicLinkAccordion />);
  const rendered = getByText(title);
  expect(rendered).toBeTruthy();
});
