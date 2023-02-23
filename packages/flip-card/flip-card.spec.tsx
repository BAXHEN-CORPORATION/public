import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import React from "react";

import {
  BasicFlipCard,
  CustomMoreLabelFlipCard,
} from "./flip-card.composition";
import {
  customFlipLabel,
  defaultFlipLabel,
  details,
  flipIconDataTestId,
  iconDataTestId,
  title,
} from "./test";

import classes from "./flip-card-classes";

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

  it("should render with the root class", () => {
    render(<BasicFlipCard />);

    const flipCard = screen.getByTestId("flip-card");

    expect(flipCard.className).toContain(classes.root);
    expect(flipCard.className).not.toContain(classes.outlined);
  });
  it.todo("should render with primary color and respective contrast color");
  it.todo("should render with secondary color and respective contrast color");
  it.todo("should render with error color and respective contrast color");
  it.todo("should render with success color and respective contrast color");
  it.todo("should render with warning color and respective contrast color");
  it.todo("should render with info color and respective contrast color");
});
