import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from "@mui/utils";

export interface DetailsClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `color="primary"`. */
  primary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  secondary: string;
  /** Styles applied to the root element if `color="error"`. */
  error: string;
  /** Styles applied to the root element if `color="success"`. */
  success: string;
  /** Styles applied to the root element if `color="info"`. */
  info: string;
  /** Styles applied to the root element if `color="warning"`. */
  warning: string;
  /** Styles applied to the summary element. */
  summary: string;
  /** Styles applied to the summary title element. */
  summaryTitle: string;
  /** Styles applied to the content wrapper element. */
  contentWrapper: string;
  /** Styles applied to the content text element. */
  contentText: string;
}

export type DetailsClassKey = keyof DetailsClasses;

export function getDetailsUtilityClass(slot: string): string {
  return generateUtilityClass("BaxDetails", slot, "Bax");
}

const detailsClasses: DetailsClasses = generateUtilityClasses(
  "BaxDetails",
  [
    "root",
    "primary",
    "secondary",
    "error",
    "success",
    "warning",
    "info",
    "summary",
    "summaryTitle",
    "contentWrapper",
    "contentText",
  ],
  "Bax"
);

export default detailsClasses;
