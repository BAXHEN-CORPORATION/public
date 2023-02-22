import Box from "@mui/material/Box";
import React from "react";
import { Details } from "./details";
import { content, title, Wrapper } from "./test";

export const BasicDetails = () => {
  return (
    <Wrapper>
      <Details title={title}>{content}</Details>
    </Wrapper>
  );
};
export const BasicWithNodeDetails = () => {
  return (
    <Wrapper>
      <Details title={title}>
        This is with node <a href="#">see more</a>
      </Details>
    </Wrapper>
  );
};
