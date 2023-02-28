import React from "react";
import { ChipSelectionGroupProps } from "./chip-selection-group";

interface UseChipSelectionGroup extends ChipSelectionGroupProps {}

export const useChipSelectionGroup = (props: UseChipSelectionGroup) => {
  const [selected, setSelected] = React.useState(props.selected || []);

  const updatedSelected = (option: any) => {
    if (props.selected != null) {
      return;
    }

    if (selected.includes(option.value)) {
      setSelected((old) => old.filter((item) => item !== option.value));

      return;
    }

    setSelected((old) => [...old, option.value]);
  };

  const onClear = () => {
    if (props.onClear) {
      props.onClear();
      return;
    }
    setSelected([]);
  };

  React.useEffect(() => {
    if (Array.isArray(props.selected)) {
      setSelected(props.selected);
    }
  }, [props.selected]);

  return { selected, updatedSelected, onClear };
};
