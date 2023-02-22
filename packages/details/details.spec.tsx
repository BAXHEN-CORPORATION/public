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

it.todo(
  "should have a primary a color prop from the theme palette to change focus color"
);
it.todo(
  "should have a secondary a color prop from the theme palette to change focus color"
);

it.todo("should receive styles from the theme for the DetailsRoot component");
it.todo("should receive styles from the theme for the Summary component");
it.todo("should receive styles from the theme for the SummaryTitle component");
it.todo("should receive styles from the theme for the Content component");
it.todo("should receive styles from the theme for the ContentText component");
