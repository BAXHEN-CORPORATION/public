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
export const SuccessDetails = () => {
  return (
    <Wrapper>
      <Details color="success" title={title}>
        This a success color focus state
      </Details>
    </Wrapper>
  );
};
export const ErrorDetails = () => {
  return (
    <Wrapper>
      <Details color="error" title={title}>
        This a error color focus state
      </Details>
    </Wrapper>
  );
};
export const InfoDetails = () => {
  return (
    <Wrapper>
      <Details color="info" title={title}>
        This a info color focus state
      </Details>
    </Wrapper>
  );
};
export const WarningDetails = () => {
  return (
    <Wrapper>
      <Details color="warning" title={title}>
        This a warning color focus state
      </Details>
    </Wrapper>
  );
};
