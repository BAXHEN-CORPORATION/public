import React from 'react';

import { Typing } from './typing';

import { SPEED, texts } from './test-data';
import { Box } from '@mui/material';

const Wrapper = ({ children }: any) => {
  return (
    <Box width="17rem" textAlign="center">
      {children}
    </Box>
  );
};

export const BasicTyping = () => {
  return (
    <Wrapper>
      <Typing texts={texts} />
    </Wrapper>
  );
};

export const CustomSpeedTyping = () => {
  return (
    <Wrapper>
      <Typing texts={texts} speed={SPEED} />
    </Wrapper>
  );
};

export const InfiniteTyping = () => {
  return (
    <Wrapper>
      <Typing texts={texts} speed={SPEED} infinite />
    </Wrapper>
  );
};

export const CustomColorTyping = () => {
  return (
    <Wrapper>
      <Typing texts={texts} speed={SPEED} infinite color="error" />
    </Wrapper>
  );
};
