import React from "react";
import clsx from "clsx";

import { unstable_composeClasses as composeClasses } from "@mui/utils";
import DoneIcon from "@mui/icons-material/Done";
import Chip, { ChipProps } from "@mui/material/Chip";

import { useChipSelection } from "./use-chip-selection";
import { getChipSelectionUtilityClass } from "./chip-selection-classes";
import { styled } from "@mui/material/styles";

export interface ChipSelectionProps extends ChipProps {
  defaultColor?: ChipProps["color"];
  checked?: boolean;
}

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ["root"],
    checked: ["checked"],
  };

  return composeClasses(slots, getChipSelectionUtilityClass, classes);
};

const ChipSelectionRoot = styled(Chip, {
  name: "BaxChipSelection",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})(() => ({}));

export function ChipSelection({
  defaultColor = "default",
  color = "primary",
  checked: _checked,
  ...props
}: ChipSelectionProps) {
  const { checked, toggle } = useChipSelection({ checked: _checked });

  const classes = useUtilityClasses(props);

  return (
    <ChipSelectionRoot
      className={clsx(classes.root, {
        [classes.checked]: checked,
      })}
      icon={<DoneIcon fontSize="small" />}
      {...props}
      onClick={(e) => {
        toggle();
        if (props.onClick) props.onClick(e);
      }}
      color={checked ? color : defaultColor}
    />
  );
}
