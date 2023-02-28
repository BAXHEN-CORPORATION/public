import React from "react";
import { ChipSelection } from "./chip-selection";

export const BasicChipSelection = () => {
  return <ChipSelection label="Credit" />;
};
export const ControlledChipSelection = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <ChipSelection
      checked={checked}
      onClick={() => {
        setChecked((oldChecked) => !oldChecked);
      }}
      label="Credit"
      color="success"
    />
  );
};
