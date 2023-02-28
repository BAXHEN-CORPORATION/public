import React, { ReactNode } from "react";
import clsx from "clsx";

import { lighten, Link, styled, useThemeProps } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/utils";

import type { AccordionLink, LinkAccordionColor, OwnerState } from "./types";
import { getLinkAccordionUtilityClass } from "./link-accordion-classes";
import { useLinkAccordion } from "./use-link-accordion";

export interface LinkAccordionProps {
  /**
   * the title to be rendered on the summary
   */

  title: string;
  /**
   * the title to be rendered on the summary
   */

  links: AccordionLink[];
  /**
   * the title to be rendered on the summary
   */

  onLinkClick?: <T extends AccordionLink>(link: T) => void;
  /**
   * @ignore
   */
  className?: string;
  /**
   * color of the texts in the link accordion
   *
   * @default "primary"
   */
  color?: LinkAccordionColor;
}

const useUtilityClasses = (ownerState: any) => {
  const { color, classes } = ownerState;

  const slots = {
    root: ["root", color],
    summary: ["summary"],
    summaryTitle: ["summaryTitle"],
    contentWrapper: ["contentWrapper"],
    linkWrapper: ["linkWrapper"],
    linkLabel: ["linkLabel"],
    linkDetail: ["linkDetail"],
  };

  return composeClasses(slots, getLinkAccordionUtilityClass, classes);
};

const LinkAccordionRoot = styled("details", {
  name: "BaxLinkAccordion",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})(({}) => ({
  width: "16rem",
}));

const Summary = styled("summary", {
  name: "BaxLinkAccordion",
  slot: "Summary",
  overridesResolver: (props, styles) => styles.summary,
})(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",
  padding: ".5rem .25rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  alignItems: "center",
}));

const SummaryTitle = styled("span", {
  name: "BaxLinkAccordion",
  slot: "SummaryTitle",
  overridesResolver: (props, styles) => styles.summaryTitle,
})<OwnerState>(({ theme, ownerState }) => ({
  backgroundColor: "transparent",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  margin: 0,
  color: theme.palette[ownerState.color].main,
}));

const ContentWrapper = styled("div", {
  name: "BaxLinkAccordion",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper,
})(({ theme }) => ({
  backgroundColor: "transparent",
  padding: ".5rem .25rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

const LinkWrapper = styled("div", {
  name: "BaxLinkAccordion",
  slot: "LinkWrapper",
  overridesResolver: (props, styles) => styles.linkWrapper,
})(({ theme }) => ({
  backgroundColor: "transparent",
  padding: ".5rem .25rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  height: ".5rem",
}));

const LinkLabel = styled(Link, {
  name: "BaxLinkAccordion",
  slot: "LinkLabel",
  overridesResolver: (props, styles) => styles.linkLabel,
})<OwnerState>(({ theme, ownerState }) => ({
  cursor: "pointer",
  color: theme.palette[ownerState.color].dark,
  fontSize: "1.15rem",
  fontWeight: 700,
  "&:hover": {
    color: lighten(theme.palette[ownerState.color].dark, 0.25),
  },
  textDecoration: "none",
}));

const LinkDetail = styled("p", {
  name: "BaxLinkAccordion",
  slot: "LinkDetail",
  overridesResolver: (props, styles) => styles.linkDetail,
})<OwnerState>(({ theme, ownerState }) => ({
  color: theme.palette[ownerState.color].light,
  fontSize: "1.15rem",
}));

export function LinkAccordion(inProps: LinkAccordionProps) {
  const { Icon, ref, open } = useLinkAccordion(inProps);

  const props = useThemeProps({
    props: inProps,
    name: "BaxLinkAccordion",
  });

  const {
    title,
    links = [],
    onLinkClick,
    className,
    color = "primary",
  } = props;

  const ownerState = {
    ...props,
    color,
  };

  const classes = useUtilityClasses(ownerState);
  return (
    <LinkAccordionRoot
      open={open}
      className={clsx(classes.root, className)}
      ref={ref}
      data-testid="LinkAccordion"
    >
      <Summary className={classes.summary} data-testid="Summary">
        <SummaryTitle
          data-testid="SummaryTitle"
          ownerState={ownerState}
          className={classes.summaryTitle}
        >
          {title}
        </SummaryTitle>{" "}
        <Icon
          fontSize="medium"
          sx={{ color: (theme) => theme.palette[color].light }}
        />
      </Summary>
      <ContentWrapper
        data-testid="ContentWrapper"
        className={classes.contentWrapper}
      >
        {links.map((link) => {
          return (
            <LinkWrapper
              key={link.detail + link.label}
              className={classes.linkWrapper}
              data-testid="LinkWrapper"
            >
              <LinkLabel
                data-testid="LinkLabel"
                ownerState={ownerState}
                className={classes.linkLabel}
                onClick={() => {
                  if (onLinkClick) onLinkClick(link);
                }}
              >
                {link.label}
              </LinkLabel>{" "}
              <LinkDetail
                data-testid="LinkDetail"
                className={classes.linkDetail}
                ownerState={ownerState}
              >
                {link.detail}
              </LinkDetail>
            </LinkWrapper>
          );
        })}
      </ContentWrapper>
    </LinkAccordionRoot>
  );
}
