import React from "react";
import { FancyUpload, FancyUploadProps } from "./fancy-upload";

export const BasicFancyUpload = (args: Partial<FancyUploadProps>) => {
  const props: FancyUploadProps = { onUpload: (file) => {}, ...args };

  return <FancyUpload {...props} />;
};
