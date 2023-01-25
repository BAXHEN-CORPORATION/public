import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  title,
  iconDataTestId,
  flipIconDataTestId,
  defaultFlipLabel,
  customFlipLabel,
  details,
} from './test-data';
import {
  BasicFlipCard,
  CustomMoreLabelFlipCard,
} from './flip-card.composition';

it('should render with the passed title', () => {
  const { getByText } = render(<BasicFlipCard />);

  const rendered = getByText(title);

  expect(rendered).toBeTruthy();
});
it('should render with the passed icon', () => {
  const { getByTestId } = render(<BasicFlipCard />);

  const rendered = getByTestId(iconDataTestId);

  expect(rendered).toBeTruthy();
});
it('should render with the default flip icon', () => {
  const { getByTestId } = render(<BasicFlipCard />);

  const rendered = getByTestId(flipIconDataTestId);

  expect(rendered).toBeTruthy();
});
it('should render with the default flip label', () => {
  const { getByText } = render(<BasicFlipCard />);

  const rendered = getByText(defaultFlipLabel);

  expect(rendered).toBeTruthy();
});
it('should render with the custom flip label', () => {
  const { getByText } = render(<CustomMoreLabelFlipCard />);

  const rendered = getByText(customFlipLabel);

  expect(rendered).toBeTruthy();
});

it('should render with the back content', () => {
  const { getByText } = render(<BasicFlipCard />);

  const rendered = getByText(details);

  expect(rendered).toBeTruthy();
});
