import React, { ChangeEventHandler } from "react";

export const useFancyUpload = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<FileList>();

  const onChooseFile = () => {
    if (!fileRef?.current) return;

    fileRef.current.click();
  };

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    setFiles(e.target.files);
  };

  return { fileRef, onChooseFile, onFileChange, files };
};
