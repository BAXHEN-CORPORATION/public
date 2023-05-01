import React, { ReactNode } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useFancyUpload } from "./use-fancy-upload";

export interface FancyUploadProps {}

export function FancyUpload({}: FancyUploadProps) {
  const { fileRef, onChooseFile, files, onFileChange } = useFancyUpload();

  console.log({ files });

  return (
    <Box minWidth="768px">
      <CloudUploadIcon />

      <Typography>Upload a File</Typography>
      <Typography>Select a file to upload from your computer</Typography>

      {!files && <Button onClick={onChooseFile}>Choose File</Button>}
      <input
        type="file"
        data-testid="file"
        ref={fileRef}
        hidden
        onChange={onFileChange}
      />
    </Box>
  );
}
