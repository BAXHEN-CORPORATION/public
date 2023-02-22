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
export const PrimaryDetails = () => {
  return (
    <Wrapper>
      <Details color="primary" title={title}>
        This a primary color focus state
      </Details>
    </Wrapper>
  );
};
export const SecondaryDetails = () => {
  return (
    <Wrapper>
      <Details color="secondary" title={title}>
        This a secondary color focus state
      </Details>
    </Wrapper>
  );
};
