import "@mui/material";
import { ComponentsProps } from "@mui/material";

import { TypingProps } from "./typing";

declare module "@mui/material" {
  interface ComponentsPropsList {
    BaxTyping: TypingProps;
  }

  interface ComponentNameToClassKey {
    BaxTyping: "BaxTyping";
  }
  interface Components<Theme = unknown> {
    BaxTyping?: {
      defaultProps?: ComponentsProps["BaxTyping"];
    };
  }
}
