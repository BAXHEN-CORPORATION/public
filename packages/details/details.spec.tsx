import React from "react";
import { render, screen } from "@testing-library/react";
import { BasicDetails } from "./details.composition";
import { content, title } from "./test";

it("should render with the correct summary text", () => {
  const { getByText } = render(<BasicDetails />);
  const rendered = getByText(title);
  expect(rendered).toBeTruthy();
});

it("should not show the content if the title is not clicked", () => {
  render(<BasicDetails />);
  const rendered = screen.queryByText(content);
  expect(rendered).not.toBeVisible();
});
it("should show the content if the title is clicked", () => {
  const { getByText } = render(<BasicDetails />);
  const renderedTitle = getByText(title);
  renderedTitle.click();

  const rendered = screen.queryByText(content);
  expect(rendered).toBeVisible();
});
it("should hide the content if the title is clicked twice", () => {
  const { getByText } = render(<BasicDetails />);
  const renderedTitle = getByText(title);
  renderedTitle.click();
  renderedTitle.click();

  const rendered = screen.queryByText(content);
  expect(rendered).not.toBeVisible();
});
