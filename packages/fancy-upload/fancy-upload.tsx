import React, { ReactNode } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export interface FancyUploadProps {}

export function FancyUpload({}: FancyUploadProps) {
  return (
    <Box minWidth="768px">
      <CloudUploadIcon />

      <Typography>Upload a File</Typography>
      <Typography>Select a file to upload from your computer</Typography>

      <Button>Choose File</Button>
    </Box>
  );
}
