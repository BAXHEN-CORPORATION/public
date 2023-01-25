import React from 'react';
import { render } from '@testing-library/react';

import { title, iconDataTestId } from './test-data';
import { BasicFlipCard } from './flip-card.composition';

it('should render with the passed title', () => {
  const { getByText } = render(<BasicFlipCard />);

  const rendered = getByText(title);

  expect(rendered).toBeTruthy();
});
it.todo('should render with the passed icon', () => {
  const { getByTestId } = render(<BasicFlipCard />);

  const rendered = getByTestId(iconDataTestId);

  expect(rendered).toBeTruthy();
});
it.todo('should render with the passed flip icon');
it.todo('should render with the default flip label');
it.todo('should render with the custom flip label');
it.todo('should flip and not show the front content on hover and focus state');
it.todo('should show the back content on hover and focus state');
