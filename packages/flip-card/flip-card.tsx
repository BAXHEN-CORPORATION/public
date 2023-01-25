import React, { ReactNode } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export interface FlipCardProps {
  title: string;
  icon: JSX.Element;
}

const FlipCardRoot = styled(Box)({});
const FlipCardContainer = styled(Box)({});
const FlipCardFront = styled(Box)({});
const FlipCardBack = styled(Box)({});

export function FlipCard({ title, icon }: FlipCardProps) {
  return (
    <FlipCardRoot>
      <FlipCardContainer>
        <FlipCardFront>
          {icon} {title}
        </FlipCardFront>
        <FlipCardBack></FlipCardBack>
      </FlipCardContainer>
    </FlipCardRoot>
  );
}
