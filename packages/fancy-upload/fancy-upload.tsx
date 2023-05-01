import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface FancyUploadProps {}

export function FancyUpload({}: FancyUploadProps) {
  return (
    <Box minWidth="768px">
      <Typography>Upload a File</Typography>
    </Box>
  );
}
