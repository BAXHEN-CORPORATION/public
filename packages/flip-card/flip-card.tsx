import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export interface FlipCardProps {}

const FlipCardRoot = styled(Box)({});
const FlipCardContainer = styled(Box)({});
const FlipCardFront = styled(Box)({});
const FlipCardBack = styled(Box)({});

export function FlipCard(props: FlipCardProps) {
  return (
    <FlipCardRoot>
      <FlipCardContainer>
        <FlipCardFront></FlipCardFront>
        <FlipCardBack></FlipCardBack>
      </FlipCardContainer>
    </FlipCardRoot>
  );
}
