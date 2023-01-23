import React from 'react';

import { Typing } from './typing';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { SPEED, texts } from './test-data';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box width="17rem" textAlign="center">
      <Typography>I am a {children}</Typography>
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
