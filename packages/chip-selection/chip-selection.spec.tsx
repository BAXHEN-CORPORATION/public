import React from "react";
import { act, render } from "@testing-library/react";
import { BasicChipSelection } from "./chip-selection.composition";
import { ChipSelection } from "./chip-selection";
import chipSelectionClasses from "./chip-selection-classes";

it("should render with DoneIcon correct text", () => {
  const { getByTestId } = render(<BasicChipSelection />);
  const rendered = getByTestId("DoneIcon");
  expect(rendered).toBeTruthy();
});

it("should render with the no checked class and add it after clicked", () => {
  const { getByRole } = render(<BasicChipSelection />);
  const rendered = getByRole("button");
  expect(rendered).not.toHaveClass(chipSelectionClasses.checked);

  act(() => {
    rendered.click();
  });

  expect(rendered).toHaveClass(chipSelectionClasses.checked);
});

it("should be controlled if the checked props is passed", () => {
  const { getByRole } = render(<ChipSelection label="test" checked />);
  const rendered = getByRole("button");
  expect(rendered).toHaveClass(chipSelectionClasses.checked);

  act(() => {
    rendered.click();
  });

  expect(rendered).toHaveClass(chipSelectionClasses.checked);
});
