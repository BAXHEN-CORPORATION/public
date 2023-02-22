import React from "react";

import { useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DetailsProps } from "./details";

export const useDetails = (inProps: DetailsProps) => {
  const theme = useTheme();

  const ref = React.useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = React.useState(false);

  const Icon = open ? RemoveIcon : AddIcon;

  const onOpenToggle = () => {
    setOpen((old) => !old);
  };

  /*
  * Important
  
    The details  HTML element is awesome but its open state is controlled in the DOM which means React can't currently keep track of when it is being opened or closed when the summary element is clicked.

    For example, when the element is intially closed and the user clicks the summary to open it, React will still think it is closed because the open attribute has changed directly through the DOM, not through React.

    Using the MutationObserver  API via a ref on the component, we can track when the open attribute changes in the DOM and sync it with the React state.

  */

  React.useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === "open") {
          setOpen(ref.current!.open);
        }
      }
    });

    observer.observe(ref.current!, {
      attributes: true,
      childList: false,
      subtree: false,
      attributeFilter: ["open"],
    });

    return () => observer.disconnect();
  }, [setOpen]);

  return {
    color: "primary" as const,
    ...inProps,
    open,
    onOpenToggle,
    Icon,
    ref,
  };
};
