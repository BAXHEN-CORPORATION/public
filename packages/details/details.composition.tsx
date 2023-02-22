import React from "react";
import { Details } from "./details";
import { content, title } from "./test";

export const BasicDetails = () => {
  return <Details title={title}>{content}</Details>;
};
