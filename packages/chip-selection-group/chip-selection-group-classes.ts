import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from "@mui/utils";

export interface ChipSelectionGroupClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type ChipSelectionGroupClassKey = keyof ChipSelectionGroupClasses;

export function getChipSelectionGroupUtilityClass(slot: string): string {
  return generateUtilityClass("BaxChipSelectionGroup", slot, "Bax");
}

const chipSelectionGroupClasses: ChipSelectionGroupClasses =
  generateUtilityClasses("BaxChipSelectionGroup", ["root"], "Bax");

export default chipSelectionGroupClasses;
