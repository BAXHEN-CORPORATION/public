import "@mui/material";
import {
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material";

import { FlipCardProps } from "./flip-card";
import { FlipCardClassKey } from "./flip-card-classes";

declare module "@mui/material" {
  interface ComponentsPropsList {
    BaxFlipCard: FlipCardProps;
  }

  interface ComponentNameToClassKey {
    BaxFlipCard: FlipCardClassKey;
  }
  interface Components<Theme = unknown> {
    BaxFlipCard?: {
      defaultProps?: ComponentsProps["BaxFlipCard"];
      styleOverrides?: ComponentsOverrides<Theme>["BaxFlipCard"];
      variants?: ComponentsVariants["BaxFlipCard"];
    };
  }
}
