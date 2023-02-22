import React, { ReactNode } from "react";

import { styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDetails } from "./use-details";
export interface DetailsProps {
  /**
   * the title to be rendered on the summary
   */

  title: string;
  /**
   * the content to be rendered on the details
   */

  children: string | ReactNode;
}

const DetailsRoot = styled("details", {
  name: "BaxDetails",
  slot: "Root",
  // overridesResolver: (props, styles) => {
  //   return [styles.root];
  // },
})({
  backgroundColor: "rgb(255, 255, 255)",
  border: "1px solid rgb(219, 229, 230)",
  borderRadius: "1rem",
  display: "block",
  width: "100%",
});
const Summary = styled("summary")(({ theme }) => ({
  listStyle: "none",
  cursor: "pointer",
  padding: "2rem 3rem",
  display: "flex",
  gap: "2rem",
  alignItems: "center",
  "&:focus": {
    outline: `${theme.palette.primary.main} dotted 3px`,
  },
}));
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

export function Details(props: DetailsProps) {
  const { title, children, open, Icon, ref } = useDetails(props);

  return (
    <DetailsRoot open={open} ref={ref}>
      <Summary>
        <SummaryTitle>{title}</SummaryTitle>
        <Icon fontSize="medium" />
      </Summary>
      <Content>
        <ContentText>{children}</ContentText>
      </Content>
    </DetailsRoot>
  );
}
