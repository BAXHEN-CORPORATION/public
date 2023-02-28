import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from "@mui/utils";

export interface ChipSelectionClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element when it's checked */
  checked: string;
}

export type ChipSelectionClassKey = keyof ChipSelectionClasses;

export function getChipSelectionUtilityClass(slot: string): string {
  return generateUtilityClass("BaxChipSelection", slot, "BaxChipSelection");
}

const chipSelectionClasses: ChipSelectionClasses = generateUtilityClasses(
  "BaxChipSelection",
  ["root", "checked"],
  "Bax"
);

export default chipSelectionClasses;
