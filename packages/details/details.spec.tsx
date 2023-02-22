import React from "react";
import { render } from "@testing-library/react";
import { BasicDetails } from "./details.composition";
import { content, title } from "./test";

it("should render with the correct summary text", () => {
  const { getByText } = render(<BasicDetails />);
  const rendered = getByText(title);
  expect(rendered).toBeTruthy();
});

it("should not show the content if the title is not clicked", () => {
  const { getByRole } = render(<BasicDetails />);
  const rendered = getByRole("paragraph");
  expect(rendered.innerHTML).not.toBeTruthy();
});
it.todo("should show the content if the title is clicked");
it.todo("should hide the content if the title is clicked twice");
