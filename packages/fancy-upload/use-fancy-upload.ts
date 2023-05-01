import React, { ChangeEventHandler } from "react";

export type FancyUploadStatus =
  | "choose-file"
  | "error"
  | "success"
  | "uploading"
  | "selected-file";

export const useFancyUpload = () => {
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

  const onUpload = () => {
    setStatus("uploading");
  };

  return {
    fileRef,
    onChooseFile,
    onFileChange,
    files,
    onResetFile,
    status,
    onUpload,
  };
};
