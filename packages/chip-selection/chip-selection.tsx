import React, { ReactNode } from "react";

import DoneIcon from "@mui/icons-material/Done";

import Chip, { ChipProps } from "@mui/material/Chip";
import { useChipSelection } from "./use-chip-selection";

export interface ChipSelectionProps extends ChipProps {
  defaultColor?: ChipProps["color"];
  checked?: boolean;
}

export function ChipSelection({
  defaultColor = "default",
  color = "primary",
  checked: _checked,
  ...props
}: ChipSelectionProps) {
  const { checked, toggle } = useChipSelection({ checked: _checked });
  return (
    <Chip
      icon={<DoneIcon fontSize="small" />}
      {...props}
      label="Custom delete icon"
      onClick={(e) => {
        toggle();
        if (props.onClick) props.onClick(e);
      }}
      color={checked ? color : defaultColor}
    />
  );
}
