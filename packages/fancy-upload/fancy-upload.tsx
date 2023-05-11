import React, { ReactNode } from "react";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { FancyUploadCallbackStatus, useFancyUpload } from "./use-fancy-upload";
import { LinearProgressProps } from "@mui/material/LinearProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/material";

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

const fillIn = keyframes`
  0% {
    fill-opacity: 0;
    transform: translateY(200%);
  }
  90% {
    fill-opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    fill-opacity: 1;
    transform: translateY(0);
  }
`;

const Root = styled("div")(() => ({
  maxWidth: "30.5em",
  padding: "2em 2em 1.875em 1.875em",
  display: "flex",
  gap: "1.875em",
  backgroundColor: "white",
  borderRadius: "1em",
  "& > svg": {
    alignSelf: "center",
  },
  "& > svg > path": {
    fillOpacity: 0,
    animation: `${fillIn} 1s forwards`,
  },
}));
const Content = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  textAlign: "start",
  gap: "1.5em",
}));

const Title = styled(Typography)(() => ({
  fontSize: "1.25rem",
  fontWeigh: 500,
  color: "rgb(11,12,14)",
}));
const Description = styled(Typography)(() => ({
  fontSize: "1rem",
  color: "rgb(69,73,84)",
}));

const ChooseFileButton = styled(Button)(() => ({
  border: "1px dashed rgba(115,122,140,0.4)",
  color: "rgb(11,12,14)",

  "&:hover": {
    backgroundColor: "rgba(143,149,163,0.2)",
  },
}));

export type UpadateStatusFunction = (status: FancyUploadCallbackStatus) => void;
export type OnUploadFuntion = (
  file: File,
  updateStatus: UpadateStatusFunction
) => void;

export interface FancyUploadProps {
  onUpload: OnUploadFuntion;
  progress: number;
  onDone?: () => void;
  onCopy: () => void;
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
    onUploadDone,
    onLinkCopy,
    copy,
  } = useFancyUpload(props);

  if (status === "choose-file")
    return (
      <Root>
        <CloudUploadIcon color="primary" fontSize="large" />
        <Content>
          <Title>Upload a File</Title>
          <Description>Select a file to upload from your computer</Description>
          <ChooseFileButton onClick={onChooseFile}>
            Choose File
          </ChooseFileButton>
          <input
            type="file"
            data-testid="file"
            ref={fileRef}
            hidden
            onChange={onFileChange}
          />
        </Content>
      </Root>
    );

  if (status === "selected-file" && files)
    return (
      <Root>
        <CloudUploadIcon color="primary" />
        <Content>
          <Title>Upload a File</Title>
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
        </Content>
      </Root>
    );

  if (status === "uploading") {
    return (
      <Root>
        <CloudUploadIcon color="primary" />

        <Content>
          <Title>Uploading...</Title>
          <Typography>Just give us a moment to process your file.</Typography>
          <LinearProgressWithLabel
            data-testid="progress-bar"
            value={progress}
          />
        </Content>
      </Root>
    );
  }
  if (status === "error") {
    return (
      <Root>
        <HighlightOffIcon />
        <Content>
          <Title>Oops!</Title>
          <Typography>
            Your file could not be uploaded due to an error. Try uploading it
            again?
          </Typography>
          <Button onClick={onUpload}>Retry</Button>
          <Button onClick={onResetFile}>Cancel</Button>
        </Content>
      </Root>
    );
  }
  if (status === "success") {
    return (
      <Root>
        <Content>
          <CheckCircleOutlineIcon />

          <Title>Upload Successful!</Title>
          <Typography>
            Your file has been uploaded. You can copy the link to your
            clipboard.
          </Typography>
          <Button onClick={onLinkCopy} disabled={copy}>
            {copy ? "Copied!" : "Copy Link"}
          </Button>
          <Button onClick={onUploadDone}>Done</Button>
        </Content>
      </Root>
    );
  }

  return <Box></Box>;
}
