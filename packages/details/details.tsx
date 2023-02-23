import React, { ReactNode } from "react";
import clsx from "clsx";

import { styled, useThemeProps } from "@mui/material";

import { unstable_composeClasses as composeClasses } from "@mui/utils";

import { useDetails } from "./use-details";
import { SummaryFocusColor } from "./types";
import { getDetailsUtilityClass } from "./details-classes";
export interface DetailsProps {
  /**
   * the title to be rendered on the summary
   */

  title: string;
  /**
   * the content to be rendered on the details
   */

  children: string | ReactNode;
  /**
   * the focus color of the summary outline
   */

  color?: SummaryFocusColor;

  /**
   * @ignore
   */
  className?: string;
}

const useUtilityClasses = (ownerState) => {
  const { color, classes } = ownerState;

  const slots = {
    root: ["root", color],
    summary: ["summary"],
    summaryTitle: ["summaryTitle"],
    contentWrapper: ["contentWrapper"],
    contentText: ["contentText"],
  };

  return composeClasses(slots, getDetailsUtilityClass, classes);
};

const DetailsRoot = styled("details", {
  name: "BaxDetails",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, styles.primary];
  },
})(({ theme, ownerState }) => ({
  backgroundColor: "rgb(255, 255, 255)",
  border: "1px solid rgb(219, 229, 230)",
  borderRadius: "1rem",
  display: "block",
  width: "100%",

  "& > summary:focus": {
    outline: `${theme.palette[ownerState.color].main} dotted 3px`,
  },
}));

const Summary = styled("summary", {
  name: "BaxDetails",
  slot: "Summary",
  overridesResolver: (props, styles) => styles.summary,
})(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",
  padding: "1rem 1.5rem",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  [`${theme.breakpoints.up("md")}`]: {
    padding: "2rem 3rem",
    gap: "2rem",
  },
  [`${theme.breakpoints.up("sm")}`]: {
    padding: "1.5rem 2.25rem",
    gap: "1.5rem",
  },
}));

const SummaryTitle = styled("span", {
  name: "BaxDetails",
  slot: "SummaryTitle",
  overridesResolver: (props, styles) => styles.summaryTitle,
})({
  backgroundColor: "transparent",
  fontSize: "1.2rem",
  fontWeight: 600,
  lineHeight: 1.5,
  margin: 0,
});

const ContentWrapper = styled("div", {
  name: "BaxDetails",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper,
})(({ theme }) => ({
  backgroundColor: "transparent",
  padding: "1rem 1.5rem",
  borderTop: "1px solid rgb(219, 229, 230)",
  color: "rgb(115, 115, 115)",
  wordBreak: "break-word",

  [`${theme.breakpoints.up("md")}`]: {
    padding: "2rem 3rem",
    gap: "2rem",
  },
  [`${theme.breakpoints.up("sm")}`]: {
    padding: "1.5rem 2.25rem",
    gap: "1.5rem",
  },
}));

const ContentText = styled("p", {
  name: "BaxDetails",
  slot: "ContentText",
  overridesResolver: (props, styles) => styles.contentText,
})(({ theme }) => ({
  marginBottom: "1rem",
  backgroundColor: "transparent",
  lineHeight: 1.5,
  fontWeight: 400,
  width: "100%",

  [`${theme.breakpoints.up("md")}`]: {
    marginBottom: "2rem",
  },
  [`${theme.breakpoints.up("sm")}`]: {
    marginBottom: "1.5rem",
  },
}));

export function Details(inProps: DetailsProps) {
  const { open, Icon, ref } = useDetails(inProps);

  const props = useThemeProps({
    props: inProps,
    name: "BaxDetails",
  });

  const { className, title, children, color = "primary" } = props;

  const ownerState = {
    ...props,
    color,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <DetailsRoot
      ownerState={ownerState}
      open={open}
      ref={ref}
      className={clsx(classes.root, className)}
      data-testid="Details"
    >
      <Summary data-testid="Summary" className={classes.summary}>
        <SummaryTitle className={classes.summaryTitle}>{title}</SummaryTitle>
        <Icon fontSize="medium" />
      </Summary>
      <ContentWrapper
        className={classes.contentWrapper}
        data-testid="ContentWrapper"
      >
        <ContentText className={classes.contentText}>{children}</ContentText>
      </ContentWrapper>
    </DetailsRoot>
  );
}
