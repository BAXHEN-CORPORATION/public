import React from "react";
import { FancyUpload, FancyUploadProps } from "./fancy-upload";

export const BasicFancyUpload = (args: Partial<FancyUploadProps>) => {
  const [progress, setProgress] = React.useState(1);

  const onUpload: FancyUploadProps["onUpload"] = async (file, updateStatus) => {
    return new Promise((resolve) => {
      const timerId = setInterval(() => {
        setProgress((old) => {
          if (old < 100) {
            return old + 1;
          }

          clearInterval(timerId);
          updateStatus("success");
          resolve();

          return 100;
        });
      }, 50);
    });
  };

  const onCopy = () => {};

  const props: FancyUploadProps = { onUpload, progress, onCopy, ...args };

  return <FancyUpload {...props} />;
};
