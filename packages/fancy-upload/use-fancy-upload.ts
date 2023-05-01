import React, { ChangeEventHandler } from "react";

export const useFancyUpload = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<FileList | null>(null);

  const onChooseFile = () => {
    if (!fileRef?.current) return;

    fileRef.current.click();
  };

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    setFiles(e.target.files);
  };

  const onResetFile = () => {
    setFiles(null);

    if (!fileRef.current) return;

    fileRef.current.value = "";
  };

  return { fileRef, onChooseFile, onFileChange, files, onResetFile };
};
