import "@mui/material";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

import { LinkAccordionProps } from "./link-accordion";
import { LinkAccordionClassKey } from "./link-accordion-classes";

declare module "@mui/material" {
  interface ComponentsPropsList {
    BaxLinkAccordion: LinkAccordionProps;
  }

  interface ComponentNameToClassKey {
    BaxLinkAccordion: LinkAccordionClassKey;
  }
  interface Components<Theme = unknown> {
    BaxLinkAccordion?: {
      defaultProps?: ComponentsProps["BaxLinkAccordion"];
      styleOverrides?: ComponentsOverrides<Theme>["BaxLinkAccordion"];
      variants?: ComponentsVariants["BaxLinkAccordion"];
    };
  }
}
