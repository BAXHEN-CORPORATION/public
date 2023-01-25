import React from 'react';

import Box from '@mui/material/Box';

import { FlipCard } from './flip-card';
import {
  customFlipLabel,
  details,
  Icon,
  iconDataTestId,
  title,
} from './test-data';

export const BasicFlipCard = () => {
  return (
    <Box height="300px" width="300px">
      <FlipCard
        title={title}
        icon={<Icon data-testid={iconDataTestId} />}
        details={details}
      />
    </Box>
  );
};
export const CustomMoreLabelFlipCard = () => {
  return (
    <Box height="300px" width="300px">
      <FlipCard
        title={title}
        icon={<Icon data-testid={iconDataTestId} />}
        flipLabel={customFlipLabel}
        details={details}
      />
    </Box>
  );
};
