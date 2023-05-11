import React from "react";
import { FancyUpload, FancyUploadProps } from "./fancy-upload";
import Box from "@mui/material/Box";

export const BasicFancyUpload = (args: Partial<FancyUploadProps>) => {
  const [progress, setProgress] = React.useState(1);

  const onUpload: FancyUploadProps["onUpload"] = async (file, updateStatus) => {
    return new Promise((resolve) => {
      setProgress(1);
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

  return (
    <Box p="2rem" bgcolor="green">
      <FancyUpload {...props} />;
    </Box>
  );
};
export const ErrorFancyUpload = (args: Partial<FancyUploadProps>) => {
  const [progress, setProgress] = React.useState(1);

  const onUpload: FancyUploadProps["onUpload"] = async (file, updateStatus) => {
    setProgress(1);
    return new Promise((resolve) => {
      const timerId = setInterval(() => {
        setProgress((old) => {
          if (old < 50) {
            return old + 1;
          }

          clearInterval(timerId);
          updateStatus("error");
          resolve();

          return 1;
        });
      }, 50);
    });
  };

  const onCopy = () => {};

  const props: FancyUploadProps = { onUpload, progress, onCopy, ...args };

  return (
    <Box p="2rem" bgcolor="green">
      <FancyUpload {...props} />;
    </Box>
  );
};
