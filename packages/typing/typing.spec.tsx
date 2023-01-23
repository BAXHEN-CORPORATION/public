import React from "react";
import { act, render, screen } from "@testing-library/react";
import Typing from "./typing";
import { SPEED, texts } from "./test-data";

test("if it render the letters of the texts in order according each speed time", async () => {
  jest.useFakeTimers();
  render(<Typing texts={texts} speed={SPEED} />);

  for (let index = 0; index < texts.length; index++) {
    for (let wordIndex = 1; wordIndex <= texts[index].length; wordIndex++) {
      const linkElement = screen.getByText(texts[index].slice(0, wordIndex));
      expect(linkElement).toBeInTheDocument();
      act(() => {
        jest.advanceTimersByTime(SPEED);
      });
    }
  }
});

test("if it types each only once by default and display the last one in the end", async () => {
  jest.useFakeTimers();
  render(<Typing texts={texts} speed={SPEED} />);

  for (let index = 0; index < texts.length; index++) {
    for (let wordIndex = 1; wordIndex <= texts[index].length; wordIndex++) {
      act(() => {
        jest.advanceTimersByTime(SPEED);
      });
    }
  }

  const lastText = texts[texts.length - 1];

  const spanElement = screen.getByText(lastText);
  expect(spanElement).toBeInTheDocument();
});

test("if it types texts on loop when infinite props is passed", async () => {
  jest.useFakeTimers();
  render(<Typing texts={texts} speed={SPEED} infinite />);

  for (let index = 0; index < texts.length; index++) {
    for (let wordIndex = 1; wordIndex <= texts[index].length; wordIndex++) {
      act(() => {
        jest.advanceTimersByTime(SPEED);
      });
    }
  }
  const lastText = texts[texts.length - 1];
  const spanElement = screen.queryByText(lastText);

  expect(spanElement).not.toBeInTheDocument();
});
