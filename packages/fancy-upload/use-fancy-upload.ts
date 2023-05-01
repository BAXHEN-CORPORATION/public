import React, { ChangeEventHandler } from "react";

import { FancyUploadProps } from "./fancy-upload";

export type FancyUploadStatus =
  | "choose-file"
  | "error"
  | "success"
  | "uploading"
  | "selected-file";

export const useFancyUpload = ({ onUpload }: FancyUploadProps) => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<FileList | null>(null);
  const [status, setStatus] = React.useState<FancyUploadStatus>("choose-file");

  const onChooseFile = () => {
    if (!fileRef?.current) return;

    fileRef.current.click();
  };

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    setFiles(e.target.files);

    setStatus("selected-file");
  };

  const onResetFile = () => {
    setFiles(null);

    if (!fileRef.current) return;

    fileRef.current.value = "";

    setStatus("choose-file");
  };

  const onUploadFile = () => {
    if (!files) return;
    setStatus("uploading");
    onUpload(files[0]);
  };

  return {
    fileRef,
    onChooseFile,
    onFileChange,
    files,
    onResetFile,
    status,
    onUpload: onUploadFile,
  };
};
