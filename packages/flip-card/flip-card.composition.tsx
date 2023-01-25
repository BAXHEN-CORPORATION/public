import React from 'react';
import { FlipCard } from './flip-card';
import { Icon, iconDataTestId, title } from './test-data';

export const BasicFlipCard = () => {
  return <FlipCard title={title} icon={<Icon data-testid={iconDataTestId}/>;
};
