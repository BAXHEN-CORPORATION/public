import React, { ReactNode } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { useFancyUpload } from "./use-fancy-upload";

export interface FancyUploadProps {}

export function FancyUpload({}: FancyUploadProps) {
  const { fileRef, onChooseFile, files, onFileChange, onResetFile } =
    useFancyUpload();

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

      {files && (
        <Box>
          <InsertDriveFileIcon />
          <Typography>{files[0].name}</Typography>
          <IconButton onClick={onResetFile}>
            <CloseIcon />
          </IconButton>
          <Button>Upload</Button>
        </Box>
      )}
    </Box>
  );
}
