import {
  createTheme,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
  Components,
} from "@mui/material/styles";

import { FlipCardProps } from "./flip-card";
import { FlipCardClassKey } from "./flip-card-classes";

declare module "@mui/material/styles" {
  interface ComponentsPropsList {
    BaxFlipCard: FlipCardProps;
  }

  interface ComponentNameToClassKey {
    BaxFlipCard: FlipCardClassKey;
  }
  interface Components {
    BaxFlipCard?: {
      defaultProps?: ComponentsProps["BaxFlipCard"];
      styleOverrides?: ComponentsOverrides["BaxFlipCard"];
      variants?: ComponentsVariants["BaxFlipCard"];
    };
  }
}

export const Overrides = {
  styleOverrides: { root: { color: "#FF0000" } },
} as const;

const BaxFlipCard: Components["BaxFlipCard"] = Overrides;

export const theme = createTheme({
  components: {
    BaxFlipCard,
  },
});
