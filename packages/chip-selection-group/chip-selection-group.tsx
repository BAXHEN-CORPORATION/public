import React from "react";

import { ChipSelection } from "@baxhen/public.chip-selection";

import { styled } from "@mui/material/styles";
import { unstable_composeClasses as composeClasses } from "@mui/utils";

import DeleteIcon from "@mui/icons-material/Delete";
import Chip, { ChipProps } from "@mui/material/Chip";

import { useChipSelectionGroup } from "./use-chip-selection-group";
import { getChipSelectionGroupUtilityClass } from "./chip-selection-group-classes";

export interface Option {
  value: number | string;
  label: string;
}
export interface ChipSelectionGroupProps {
  options: Option[];
  selected?: (number | string)[];
  onSelectChange?: (option: Option) => void;
  onClear?: () => void;
  clear?: boolean;
  clearLabel?: string;
  color?: ChipProps["color"];
  defaultColor?: ChipProps["color"];
}

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ["root"],
  };

  return composeClasses(slots, getChipSelectionGroupUtilityClass, classes);
};

const ChipSelectionGroupRoot = styled("div", {
  name: "BaxChipSelectionGroup",
  slot: "Root",
  overridesResolver: (props, styles) => {
    return [styles.root];
  },
})(() => ({
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
}));

export function ChipSelectionGroup(props: ChipSelectionGroupProps) {
  const {
    selected = [],
    updatedSelected,
    onClear,
  } = useChipSelectionGroup(props);

  const classes = useUtilityClasses(props);

  return (
    <ChipSelectionGroupRoot className={classes.root}>
      {props.options.map((option) => {
        const { value, label } = option;
        return (
          <ChipSelection
            key={value}
            label={label}
            checked={selected.includes(value)}
            onClick={() => {
              if (props.onSelectChange) {
                props.onSelectChange(option);
                return;
              }

              updatedSelected(option);
            }}
            color={props.color}
            defaultColor={props.defaultColor}
          />
        );
      })}

      {props.clear ? (
        <Chip
          label={props.clearLabel || "Clear"}
          onClick={onClear}
          onDelete={onClear}
          deleteIcon={<DeleteIcon />}
          color="error"
        />
      ) : null}
    </ChipSelectionGroupRoot>
  );
}
