import React from "react";
import { render, screen } from "@testing-library/react";

import {
  BasicDetails,
  ErrorDetails,
  InfoDetails,
  OverrideDetailsRoot,
  PrimaryDetails,
  SecondaryDetails,
  SuccessDetails,
  WarningDetails,
} from "./details.composition";
import { content, theme, themeOverrides, title } from "./test";
import detailsClasses from "./details-classes";

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

it("should render with the root and primary classes but no others", () => {
  const { getByTestId } = render(<PrimaryDetails />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveClass(detailsClasses.root);
  expect(rendered).toHaveClass(detailsClasses.primary);
  expect(rendered).not.toHaveClass(detailsClasses.secondary);
  expect(rendered).not.toHaveClass(detailsClasses.error);
  expect(rendered).not.toHaveClass(detailsClasses.success);
  expect(rendered).not.toHaveClass(detailsClasses.info);
  expect(rendered).not.toHaveClass(detailsClasses.warning);
});
it("should render with the root and secondary classes but no others", () => {
  const { getByTestId } = render(<SecondaryDetails />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveClass(detailsClasses.root);
  expect(rendered).not.toHaveClass(detailsClasses.primary);
  expect(rendered).toHaveClass(detailsClasses.secondary);
  expect(rendered).not.toHaveClass(detailsClasses.error);
  expect(rendered).not.toHaveClass(detailsClasses.success);
  expect(rendered).not.toHaveClass(detailsClasses.info);
  expect(rendered).not.toHaveClass(detailsClasses.warning);
});
it("should render with the root and error classes but no others", () => {
  const { getByTestId } = render(<ErrorDetails />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveClass(detailsClasses.root);
  expect(rendered).not.toHaveClass(detailsClasses.primary);
  expect(rendered).not.toHaveClass(detailsClasses.secondary);
  expect(rendered).toHaveClass(detailsClasses.error);
  expect(rendered).not.toHaveClass(detailsClasses.success);
  expect(rendered).not.toHaveClass(detailsClasses.info);
  expect(rendered).not.toHaveClass(detailsClasses.warning);
});
it("should render with the root and success classes but no others", () => {
  const { getByTestId } = render(<SuccessDetails />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveClass(detailsClasses.root);
  expect(rendered).not.toHaveClass(detailsClasses.primary);
  expect(rendered).not.toHaveClass(detailsClasses.secondary);
  expect(rendered).not.toHaveClass(detailsClasses.error);
  expect(rendered).toHaveClass(detailsClasses.success);
  expect(rendered).not.toHaveClass(detailsClasses.info);
  expect(rendered).not.toHaveClass(detailsClasses.warning);
});
it("should render with the root and info classes but no others", () => {
  const { getByTestId } = render(<InfoDetails />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveClass(detailsClasses.root);
  expect(rendered).not.toHaveClass(detailsClasses.primary);
  expect(rendered).not.toHaveClass(detailsClasses.secondary);
  expect(rendered).not.toHaveClass(detailsClasses.error);
  expect(rendered).not.toHaveClass(detailsClasses.success);
  expect(rendered).toHaveClass(detailsClasses.info);
  expect(rendered).not.toHaveClass(detailsClasses.warning);
});
it("should render with the root and warning classes but no others", () => {
  const { getByTestId } = render(<WarningDetails />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveClass(detailsClasses.root);
  expect(rendered).not.toHaveClass(detailsClasses.primary);
  expect(rendered).not.toHaveClass(detailsClasses.secondary);
  expect(rendered).not.toHaveClass(detailsClasses.error);
  expect(rendered).not.toHaveClass(detailsClasses.success);
  expect(rendered).not.toHaveClass(detailsClasses.info);
  expect(rendered).toHaveClass(detailsClasses.warning);
});

it("should receive styles from the theme for the DetailsRoot component", () => {
  const { getByTestId } = render(<OverrideDetailsRoot />);
  const rendered = getByTestId("Details");

  expect(rendered).toHaveStyle(
    `background-color:${
      themeOverrides.components!.BaxDetails!.styleOverrides.root.backgroundColor
    }`
  );
});
it.todo("should receive styles from the theme for the Summary component");
it.todo("should receive styles from the theme for the SummaryTitle component");
it.todo("should receive styles from the theme for the Content component");
it.todo("should receive styles from the theme for the ContentText component");
