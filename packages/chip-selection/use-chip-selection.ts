import React from "react";

interface UseChipSelection {
  checked?: boolean;
}

export const useChipSelection = (props: UseChipSelection) => {
  const [checked, setChecked] = React.useState(props.checked);

  const toggle = () => {
    if (props.checked != null) {
      return;
    }
    setChecked((old) => !old);
  };

  React.useEffect(() => {
    if (props.checked != null) {
      setChecked(props.checked);
    }
  }, [props.checked]);

  return { checked, toggle };
};
