import React, { ChangeEventHandler } from "react";

import { FancyUploadProps } from "./fancy-upload";

export type FancyUploadCallbackStatus = "error" | "success";
export type FancyUploadStatus =
  | "choose-file"
  | "uploading"
  | "selected-file"
  | FancyUploadCallbackStatus;

export const useFancyUpload = ({ onUpload, progress }: FancyUploadProps) => {
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
    onUpload(files[0], setStatus);
  };

  return {
    fileRef,
    onChooseFile,
    onFileChange,
    files,
    onResetFile,
    status,
    onUpload: onUploadFile,
    progress,
  };
};
