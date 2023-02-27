import React from "react";
import { act, render, screen } from "@testing-library/react";
import { BasicLinkAccordion } from "./link-accordion.composition";
import { links, title } from "./test/data";

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

// it.todo(
//   "should run callback on link label click with all link data if the callback is passed",
//   () => {
//     const callback = jest.fn();

//     render(<BasicLinkAccordion onLinkClick={callback} />);
//   }
// );
