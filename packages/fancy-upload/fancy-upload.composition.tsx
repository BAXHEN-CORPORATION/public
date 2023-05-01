import React from "react";
import { FancyUpload, FancyUploadProps } from "./fancy-upload";

export const BasicFancyUpload = (args: Partial<FancyUploadProps>) => {
  const [progress, setProgress] = React.useState(1);

  const onUpload: FancyUploadProps["onUpload"] = (file, updateStatus) => {
    if (Math.random() * 10 > 5) {
      updateStatus("error");
      return;
    }
    const timerId = setInterval(() => {
      setProgress((old) => {
        if (old < 100) {
          return old + 1;
        }

        clearInterval(timerId);

        updateStatus("success");
        return 100;
      });
    }, 50);
  };

  const props: FancyUploadProps = { onUpload, progress, ...args };

  return <FancyUpload {...props} />;
};
