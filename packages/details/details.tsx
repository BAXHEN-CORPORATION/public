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
})({
  listStyle: "none",
  cursor: "pointer",
  padding: "2rem 3rem",
  display: "flex",
  gap: "2rem",
  alignItems: "center",
});

const SummaryTitle = styled("span")(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: "1.2rem",
  fontWeight: 600,
  lineHeight: 1.5,
  margin: 0,
}));

const Content = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",
  padding: "2rem 3rem",
  borderTop: "1px solid rgb(219, 229, 230)",
  color: "rgb(115, 115, 115)",
  wordBreak: "break-word",
}));

const ContentText = styled("p")(({ theme }) => ({
  margin: 0,
  backgroundColor: "transparent",
  lineHeight: 1.5,
  fontWeight: 400,
  width: "100%",
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
        <SummaryTitle>{title}</SummaryTitle>
        <Icon fontSize="medium" />
      </Summary>
      <Content>
        <ContentText>{children}</ContentText>
      </Content>
    </DetailsRoot>
  );
}
