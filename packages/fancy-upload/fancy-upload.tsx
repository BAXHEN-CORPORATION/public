import React, { ReactNode } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { FancyUploadCallbackStatus, useFancyUpload } from "./use-fancy-upload";
import { LinearProgressProps } from "@mui/material/LinearProgress";
import LinearProgress from "@mui/material/LinearProgress";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export interface FancyUploadProps {
  onUpload: (
    file: File,
    updateStatus: (status: FancyUploadCallbackStatus) => void
  ) => void;
  progress: number;
}

export function FancyUpload(props: FancyUploadProps) {
  const {
    fileRef,
    onChooseFile,
    files,
    onFileChange,
    onResetFile,
    status,
    onUpload,
    progress,
  } = useFancyUpload(props);

  if (status === "choose-file")
    return (
      <Box minWidth="768px">
        <CloudUploadIcon />

        <Typography>Upload a File</Typography>
        <Typography>Select a file to upload from your computer</Typography>
        <Button onClick={onChooseFile}>Choose File</Button>
        <input
          type="file"
          data-testid="file"
          ref={fileRef}
          hidden
          onChange={onFileChange}
        />
      </Box>
    );

  if (status === "selected-file" && files)
    return (
      <Box minWidth="768px">
        <CloudUploadIcon />

        <Typography>Upload a File</Typography>
        <Typography>Select a file to upload from your computer</Typography>

        <input
          type="file"
          data-testid="file"
          ref={fileRef}
          hidden
          onChange={onFileChange}
        />

        {status === "selected-file" && files && (
          <Box>
            <InsertDriveFileIcon />
            <Typography>{files[0].name}</Typography>
            <IconButton onClick={onResetFile}>
              <CloseIcon />
            </IconButton>
            <Button onClick={onUpload}>Upload</Button>
          </Box>
        )}
      </Box>
    );

  if (status === "uploading") {
    return (
      <Box minWidth="768px">
        <CloudUploadIcon />

        <Typography>Uploading...</Typography>
        <Typography>Just give us a moment to process your file.</Typography>
        <LinearProgressWithLabel data-testid="progress-bar" value={progress} />
      </Box>
    );
  }
  if (status === "error") {
    return (
      <Box minWidth="768px">
        <CloudUploadIcon />

        <Typography>{status}</Typography>
        <Typography>Just give us a moment to process your file.</Typography>
        <LinearProgressWithLabel data-testid="progress-bar" value={progress} />
      </Box>
    );
  }
  if (status === "success") {
    return (
      <Box minWidth="768px">
        <CloudUploadIcon />

        <Typography>Upload Successful!</Typography>
        <Typography>
          Your file has been uploaded. You can copy the link to your clipboard.
        </Typography>
        <Button>Copy Link</Button>
        <Button>Done</Button>
      </Box>
    );
  }

  return <Box></Box>;
}
