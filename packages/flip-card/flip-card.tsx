import React from "react";

import { styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FlipIcon from "@mui/icons-material/Flip";

export interface FlipCardProps {
  title: string;
  details: string;
  flipLabel?: string;
  icon: JSX.Element;
}

const FlipCardRoot = styled("div", {
  name: "BaxFlipCard",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root, styles.outlined];
  },
})({
  backgroundColor: "transparent",
  width: "250px",
  height: "250px",
  perspective: "1000px",
  borderRadius: "20px",
});

const FlipCardContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  textAlign: "center",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  borderRadius: "20px",
  "&:hover, &:focus ": {
    transform: "rotateY(180deg)",
  },
});
const FlipCardFront = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "20px",
  backfaceVisibility: "hidden",
  maxWidth: "100%",
}));
const FlipCardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: "uppercase",
  fontSize: "1rem",
  cursor: "default",
  "&::after": {
    content: '""',
    display: "block",
    maxWidth: "25px",
    border: `4px solid ${theme.palette.error.main}`,
    margin: "20px auto",
  },
}));

const FlipCardBack = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  transform: "rotateY(180deg)",
  backgroundColor: theme.palette.primary.dark,
  padding: "20px",
  borderRadius: "20px",
  maxWidth: "100%",
}));

const FlipCardIconContainer = styled(Box)(({ theme }) => ({
  "& > svg": {
    fontSize: "5rem",
    fill: theme.palette.primary.main,
  },
}));
const FlipCardLabelContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});
const FlipCardLabel = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  color: theme.palette.primary.main,
  textTransform: "uppercase",
  cursor: "default",
}));
const FlipCardDetails = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.primary.contrastText,
  cursor: "default",
}));

export function FlipCard({
  title,
  icon,
  flipLabel = "more",
  details,
}: FlipCardProps) {
  return (
    <FlipCardRoot data-testid="flip-card">
      <FlipCardContainer data-testid="flip-card-container">
        <FlipCardFront data-testid="flip-card-front">
          <FlipCardIconContainer>{icon}</FlipCardIconContainer>
          <FlipCardTitle>{title}</FlipCardTitle>
          <FlipCardLabelContainer>
            <FlipCardLabel>{flipLabel}</FlipCardLabel>{" "}
            <FlipIcon color="primary" />
          </FlipCardLabelContainer>
        </FlipCardFront>
        <FlipCardBack data-testid="flip-card-back">
          <FlipCardDetails>{details}</FlipCardDetails>
        </FlipCardBack>
      </FlipCardContainer>
    </FlipCardRoot>
  );
}
