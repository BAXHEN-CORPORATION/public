import React from "react";
import { LinkAccordion } from "./link-accordion";
import { Wrapper, links, title } from "./test";

export const BasicLinkAccordion = ({ onLinkClick = () => {} }) => {
  return (
    <Wrapper>
      <LinkAccordion
        title={title}
        links={links}
        onLinkClick={onLinkClick}
        color="primary"
      />
    </Wrapper>
  );
};
export const SecondaryLinkAccordion = () => {
  return (
    <Wrapper>
      <LinkAccordion title={title} links={links} color="secondary" />
    </Wrapper>
  );
};
export const ErrorLinkAccordion = () => {
  return (
    <Wrapper>
      <LinkAccordion title={title} links={links} color="error" />
    </Wrapper>
  );
};
export const SuccessLinkAccordion = () => {
  return (
    <Wrapper>
      <LinkAccordion title={title} links={links} color="success" />
    </Wrapper>
  );
};
export const InfoLinkAccordion = () => {
  return (
    <Wrapper>
      <LinkAccordion title={title} links={links} color="info" />
    </Wrapper>
  );
};
export const WarningLinkAccordion = () => {
  return (
    <Wrapper>
      <LinkAccordion title={title} links={links} color="warning" />
    </Wrapper>
  );
};
