import React from "react";
import { LinkAccordion } from "./link-accordion";
import { links, title } from "./test/data";
import { AccordionLink } from "./types";

export const BasicLinkAccordion = ({
  onLinkClick = <T extends AccordionLink>(link: T) => {
    alert(`The link ${link.label} was clicked`);
  },
}) => {
  return (
    <LinkAccordion title={title} links={links} onLinkClick={onLinkClick} />
  );
};
