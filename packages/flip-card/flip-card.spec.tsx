import React from "react";
import {
  screen,
  render,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { matchers } from "@emotion/jest";

import {
  title,
  iconDataTestId,
  flipIconDataTestId,
  defaultFlipLabel,
  customFlipLabel,
  details,
} from "./test";
import {
  BasicFlipCard,
  CustomMoreLabelFlipCard,
} from "./flip-card.composition";

expect.extend(matchers);

describe("<FlipCard />", () => {
  it("should show the front content only on default rotate", () => {
    const { getByTestId } = render(<BasicFlipCard />);

    const rendered = getByTestId("flip-card-front");

    expect(rendered).toHaveStyleRule("backface-visibility", "hidden");
    expect(rendered).toHaveStyleRule("backface-visibility", "hidden");
  });

  it("should show the back content only on 180deg rotate", () => {
    const { getByTestId } = render(<BasicFlipCard />);

    const rendered = getByTestId("flip-card-back");

    expect(rendered).toHaveStyleRule("backface-visibility", "hidden");
    expect(rendered).toHaveStyleRule("transform", "rotateY(180deg)");
  });

  it("should render with the passed title", () => {
    const { getByText } = render(<BasicFlipCard />);

    const rendered = getByText(title);

    expect(rendered).toBeTruthy();
  });
  it("should render with the passed icon", () => {
    const { getByTestId } = render(<BasicFlipCard />);

    const rendered = getByTestId(iconDataTestId);

    expect(rendered).toBeTruthy();
  });
  it("should render with the default flip icon", () => {
    const { getByTestId } = render(<BasicFlipCard />);

    const rendered = getByTestId(flipIconDataTestId);

    expect(rendered).toBeTruthy();
  });
  it("should render with the default flip label", () => {
    const { getByText } = render(<BasicFlipCard />);

    const rendered = getByText(defaultFlipLabel);

    expect(rendered).toBeTruthy();
  });
  it("should render with the custom flip label", () => {
    const { getByText } = render(<CustomMoreLabelFlipCard />);

    const rendered = getByText(customFlipLabel);

    expect(rendered).toBeTruthy();
  });

  it("should render with the back content", () => {
    const { getByText } = render(<BasicFlipCard />);

    const rendered = getByText(details);

    expect(rendered).toBeTruthy();
  });

  it("should flip the container on hover and on focus", async () => {
    render(<BasicFlipCard />);

    const rendered = screen.getByTestId("flip-card-container");

    expect(rendered).toHaveStyleRule("transform", "rotateY(180deg)", {
      target: ":hover",
    });

    expect(rendered).toHaveStyleRule("transform", "rotateY(180deg)", {
      target: ":focus",
    });

    expect(rendered).not.toHaveStyleRule("transform", "rotateY(180deg)");
  });
});
