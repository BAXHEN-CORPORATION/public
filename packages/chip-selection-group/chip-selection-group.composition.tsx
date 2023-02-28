import React from "react";

import { options, Wrapper } from "./test";
import { ChipSelectionGroup } from "./chip-selection-group";

export const BasicChipSelectionGroup = () => {
  return (
    <Wrapper>
      <ChipSelectionGroup
        options={options}
        color="primary"
        defaultColor="secondary"
      />
    </Wrapper>
  );
};
export const ClearChipSelectionGroup = () => {
  return (
    <Wrapper>
      <ChipSelectionGroup
        options={options}
        color="primary"
        defaultColor="secondary"
        clear
      />
    </Wrapper>
  );
};
export const ControlledChipSelectionGroup = () => {
  const [selected, setSelected] = React.useState([1, 2]);

  return (
    <Wrapper>
      <ChipSelectionGroup
        selected={selected}
        onSelectChange={(option) => {
          if (selected.includes(option.value as number)) {
            setSelected((old) => old.filter((item) => item !== option.value));

            return;
          }
          setSelected((old) => [...old, option.value as number]);
        }}
        onClear={() => {
          setSelected([]);
        }}
        clearLabel="Limpar"
        options={options}
        clear
        color="primary"
        defaultColor="default"
      />
    </Wrapper>
  );
};
