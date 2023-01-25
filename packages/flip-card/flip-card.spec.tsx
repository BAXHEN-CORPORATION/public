import React from 'react';
import { render } from '@testing-library/react';
import { BasicFlipCard } from './flip-card.composition';
import { FlipCard } from './flip-card';

// it('should render with the correct text, icon and with the flip icon and default flip label', () => {
//   const { getByText } = render(<BasicFlipCard />);
//   const rendered = getByText('hello world!');
//   expect(rendered).toBeTruthy();
// });

const title = 'Business investment';
it('should render with the passed title', () => {
  const { getByText } = render(<FlipCard title={title} />);

  const rendered = getByText(title);

  expect(rendered).toBeTruthy();
});
it.todo('should render with the passed icon');
it.todo('should render with the passed flip icon');
it.todo('should render with the default flip label');
it.todo('should render with the custom flip label');
it.todo('should flip and not show the front content on hover and focus state');
it.todo('should show the back content on hover and focus state');
