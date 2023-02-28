import React from "react";
import { render } from "@testing-library/react";
import { BasicChipSelectionGroup } from "./chip-selection-group.composition";
import { options } from "./test";

it("should render with the correct number of chips", () => {
  const { getAllByRole } = render(<BasicChipSelectionGroup />);
  const rendered = getAllByRole("button");
  expect(rendered.length).toBe(options.length);
});
