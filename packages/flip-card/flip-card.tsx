import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export interface FlipCardProps {
  title: string;
}

const FlipCardRoot = styled(Box)({});
const FlipCardContainer = styled(Box)({});
const FlipCardFront = styled(Box)({});
const FlipCardBack = styled(Box)({});

export function FlipCard({ title }: FlipCardProps) {
  return (
    <FlipCardRoot>
      <FlipCardContainer>
        <FlipCardFront>{title}</FlipCardFront>
        <FlipCardBack></FlipCardBack>
      </FlipCardContainer>
    </FlipCardRoot>
  );
}
