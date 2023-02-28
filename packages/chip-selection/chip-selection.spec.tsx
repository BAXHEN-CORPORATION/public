import React from "react";
import { act, render } from "@testing-library/react";
import { BasicChipSelection } from "./chip-selection.composition";
import { ChipSelection } from "./chip-selection";

it("should render with DoneIcon correct text", () => {
  const { getByTestId } = render(<BasicChipSelection />);
  const rendered = getByTestId("DoneIcon");
  expect(rendered).toBeTruthy();
});

it("should render with the default color and change to color after clicked", () => {
  const { getByRole } = render(<BasicChipSelection />);
  const rendered = getByRole("button");
  expect(rendered).toHaveClass("MuiChip-colorDefault");

  act(() => {
    rendered.click();
  });

  expect(rendered).toHaveClass("MuiChip-colorPrimary");
});

it("should be controlled if the checked props is passed", () => {
  const { getByRole } = render(<ChipSelection label="test" checked />);
  const rendered = getByRole("button");
  expect(rendered).toHaveClass("MuiChip-colorPrimary");

  act(() => {
    rendered.click();
  });

  expect(rendered).toHaveClass("MuiChip-colorPrimary");
});
