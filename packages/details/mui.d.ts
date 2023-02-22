import "@mui/material";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

import { DetailsProps } from "./details";
import { DetailsClassKey } from "./details-classes";

declare module "@mui/material" {
  interface ComponentsPropsList {
    BaxDetails: DetailsProps;
  }

  interface ComponentNameToClassKey {
    BaxDetails: DetailsClassKey;
  }
  interface Components<Theme = unknown> {
    BaxDetails?: {
      defaultProps?: ComponentsProps["BaxDetails"];
      styleOverrides?: ComponentsOverrides<Theme>["BaxDetails"];
      variants?: ComponentsVariants["BaxDetails"];
    };
  }
}
