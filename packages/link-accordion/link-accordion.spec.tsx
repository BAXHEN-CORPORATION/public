import React from "react";
import { act, render, screen } from "@testing-library/react";
import {
  BasicLinkAccordion,
  ErrorLinkAccordion,
  InfoLinkAccordion,
  SecondaryLinkAccordion,
  SuccessLinkAccordion,
  WarningLinkAccordion,
} from "./link-accordion.composition";
import { links, title } from "./test/data";
import linkAccordionClasses from "./link-accordion-classes";

it("should render with the correct title text", () => {
  const { getByText } = render(<BasicLinkAccordion />);
  const rendered = getByText(title);
  expect(rendered).toBeTruthy();
});

it("should not show the links if the title is not clicked and the links are passed", () => {
  const { getByText } = render(<BasicLinkAccordion />);

  links.forEach(({ detail, label }) => {
    const renderedLabel = getByText(label);
    const renderedDetail = getByText(detail);

    expect(renderedLabel).not.toBeVisible();
    expect(renderedDetail).not.toBeVisible();
  });
});
it("should show the links if the title is not clicked and the links are passed", () => {
  const { getByText } = render(<BasicLinkAccordion />);
  const rendered = getByText(title);

  act(() => {
    rendered.click();
  });

  links.forEach(({ detail, label }) => {
    const renderedLabel = getByText(label);
    const renderedDetail = getByText(detail);

    expect(renderedLabel).toBeVisible();
    expect(renderedDetail).toBeVisible();
  });
});

it("should run callback on link label click with all link data if the callback is passed", () => {
  const callback = jest.fn();

  const { getByText } = render(<BasicLinkAccordion onLinkClick={callback} />);

  const rendered = getByText(title);

  act(() => {
    rendered.click();
  });

  links.forEach(({ label }) => {
    const renderedLabel = getByText(label);

    renderedLabel.click();
  });

  expect(callback).toHaveBeenCalledTimes(links.length);

  links.forEach((link, index) => {
    expect(callback.mock.calls[index][0]).toBe(link);
  });
});

it("should render with the root and primary classes but no others", () => {
  const { getByTestId } = render(<BasicLinkAccordion />);
  const rendered = getByTestId("LinkAccordion");

  expect(rendered).toHaveClass(linkAccordionClasses.root);
  expect(rendered).toHaveClass(linkAccordionClasses.primary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.secondary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.error);
  expect(rendered).not.toHaveClass(linkAccordionClasses.success);
  expect(rendered).not.toHaveClass(linkAccordionClasses.info);
  expect(rendered).not.toHaveClass(linkAccordionClasses.warning);
});

it("should render with the root and secondary classes but no others", () => {
  const { getByTestId } = render(<SecondaryLinkAccordion />);
  const rendered = getByTestId("LinkAccordion");

  expect(rendered).toHaveClass(linkAccordionClasses.root);
  expect(rendered).not.toHaveClass(linkAccordionClasses.primary);
  expect(rendered).toHaveClass(linkAccordionClasses.secondary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.error);
  expect(rendered).not.toHaveClass(linkAccordionClasses.success);
  expect(rendered).not.toHaveClass(linkAccordionClasses.info);
  expect(rendered).not.toHaveClass(linkAccordionClasses.warning);
});
it("should render with the root and error classes but no others", () => {
  const { getByTestId } = render(<ErrorLinkAccordion />);
  const rendered = getByTestId("LinkAccordion");

  expect(rendered).toHaveClass(linkAccordionClasses.root);
  expect(rendered).not.toHaveClass(linkAccordionClasses.primary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.secondary);
  expect(rendered).toHaveClass(linkAccordionClasses.error);
  expect(rendered).not.toHaveClass(linkAccordionClasses.success);
  expect(rendered).not.toHaveClass(linkAccordionClasses.info);
  expect(rendered).not.toHaveClass(linkAccordionClasses.warning);
});
it("should render with the root and success classes but no others", () => {
  const { getByTestId } = render(<SuccessLinkAccordion />);
  const rendered = getByTestId("LinkAccordion");

  expect(rendered).toHaveClass(linkAccordionClasses.root);
  expect(rendered).not.toHaveClass(linkAccordionClasses.primary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.secondary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.error);
  expect(rendered).toHaveClass(linkAccordionClasses.success);
  expect(rendered).not.toHaveClass(linkAccordionClasses.info);
  expect(rendered).not.toHaveClass(linkAccordionClasses.warning);
});
it("should render with the root and info classes but no others", () => {
  const { getByTestId } = render(<InfoLinkAccordion />);
  const rendered = getByTestId("LinkAccordion");

  expect(rendered).toHaveClass(linkAccordionClasses.root);
  expect(rendered).not.toHaveClass(linkAccordionClasses.primary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.secondary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.error);
  expect(rendered).not.toHaveClass(linkAccordionClasses.success);
  expect(rendered).toHaveClass(linkAccordionClasses.info);
  expect(rendered).not.toHaveClass(linkAccordionClasses.warning);
});
it("should render with the root and warning classes but no others", () => {
  const { getByTestId } = render(<WarningLinkAccordion />);
  const rendered = getByTestId("LinkAccordion");

  expect(rendered).toHaveClass(linkAccordionClasses.root);
  expect(rendered).not.toHaveClass(linkAccordionClasses.primary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.secondary);
  expect(rendered).not.toHaveClass(linkAccordionClasses.error);
  expect(rendered).not.toHaveClass(linkAccordionClasses.success);
  expect(rendered).not.toHaveClass(linkAccordionClasses.info);
  expect(rendered).toHaveClass(linkAccordionClasses.warning);
});
