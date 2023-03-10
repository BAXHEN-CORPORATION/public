import { Components, createTheme } from "@mui/material/styles";

import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

import { LinkAccordionProps } from "./link-accordion";
import { LinkAccordionClassKey } from "./link-accordion-classes";

declare module "@mui/material/styles" {
  interface ComponentsPropsList {
    BaxLinkAccordion: LinkAccordionProps;
  }

  interface ComponentNameToClassKey {
    BaxLinkAccordion: LinkAccordionClassKey;
  }
  interface Components {
    BaxLinkAccordion?: {
      defaultProps?: ComponentsProps["BaxLinkAccordion"];
      styleOverrides?: ComponentsOverrides["BaxLinkAccordion"];
      variants?: ComponentsVariants["BaxLinkAccordion"];
    };
  }
}

export const Overrides = {
  defaultProps: { color: "secondary" },
  styleOverrides: {
    root: { backgroundColor: "blue" },
    summary: { backgroundColor: "blue" },
    summaryTitle: { backgroundColor: "blue" },
    contentWrapper: { backgroundColor: "blue" },
    linkWrapper: { backgroundColor: "blue" },
    linkLabel: { backgroundColor: "blue" },
    linkDetail: { backgroundColor: "blue" },
  },
} as const;

const BaxLinkAccordion: Components["BaxLinkAccordion"] = Overrides;

export const theme = createTheme();
export const themeOverrides = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxLinkAccordion,
  },
});
