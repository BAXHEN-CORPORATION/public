import {
  createTheme,
  Components,
  ComponentsProps,
  ComponentsOverrides,
  ComponentsVariants,
} from "@mui/material/styles";

import "@mui/material";

import { ChipSelectionGroupProps } from "./chip-selection-group";
import { ChipSelectionGroupClassKey } from "./chip-selection-group-classes";

declare module "@mui/material/styles" {
  interface ComponentsPropsList {
    BaxChipSelectionGroup: ChipSelectionGroupProps;
  }

  interface ComponentNameToClassKey {
    BaxChipSelectionGroup: ChipSelectionGroupClassKey;
  }
  interface Components {
    BaxChipSelectionGroup?: {
      defaultProps?: ComponentsProps["BaxChipSelectionGroup"];
      styleOverrides?: ComponentsOverrides["BaxChipSelectionGroup"];
      variants?: ComponentsVariants["BaxChipSelectionGroup"];
    };
  }
}

export const Overrides = {
  defaultProps: { color: "primary" },
  styleOverrides: {
    root: { backgroundColor: "blue" },
    summary: { color: "green" },
    summaryTitle: { color: "green" },
    contentWrapper: { color: "green" },
    contentText: { color: "green" },
  },
} as const;

const BaxChipSelectionGroup: Components["BaxChipSelectionGroup"] = Overrides;

export const theme = createTheme();
export const themeOverrides = createTheme({
  palette: { primary: { main: "#FF0000" } },
  components: {
    BaxChipSelectionGroup: { ...BaxChipSelectionGroup },
  },
});
