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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={700}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
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

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(33%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Root = styled("div")(() => ({
  maxWidth: "549px",
  width: "calc(100% - 48px)",
  padding: "36px 33.75px",
  display: "flex",
  gap: "2rem",
  backgroundColor: "white",
  borderRadius: "18px",
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
  minHeight: "48px",
  maxWidth: "405px",
  width: "80%",

  "& > *": {
    animationName: fadeSlideIn,
    animationDuration: "0.5s",
    animationTimingFunction: "ease-in-out",
    animationFillMode: "forwards",
    opacity: 0,
  },
}));

const Title = styled(Typography)(() => ({
  fontSize: "22.5px",
  fontWeigh: 500,
  color: "rgb(11,12,14)",
  lineHeight: 1.2,
  marginBottom: "27px",
}));
const Description = styled(Typography)(() => ({
  fontSize: "18px",
  color: "rgb(69,73,84)",
  minHeight: "48px",
  marginBottom: "27px",
}));

const ChooseFileButton = styled(Button)(() => ({
  border: "1px dashed rgba(115,122,140,0.4)",
  color: "rgb(11,12,14)",
  textTransform: "capitalize",
  height: "37px",
  "&:hover, &:focus": {
    backgroundColor: "rgba(143,149,163,0.2)",
  },
}));

const ActionButton = styled(Button)(() => ({
  padding: "9px 36px",
  fontSize: "13.5px",
  backgroundColor: "rgba(143, 149, 163, 0.2)",
  color: "rgb(11,12,14)",
  textTransform: "capitalize",
  height: "37px",
  "&:hover, &:focus": {
    backgroundColor: "rgba(143,149,163,0.18)",
  },
}));

const Actions = styled("div")(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
}));

const Filename = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontWeight: 700,
  lineHeight: "20.25px",
  fontSize: "13.5px",
  marginRight: "4.5px",
  whiteSpace: "nowrap",
}));

export type UpadateStatusFunction = (status: FancyUploadCallbackStatus) => void;
export type OnUploadFuntion = (
  file: File,
  updateStatus: UpadateStatusFunction
) => void;

export interface FancyUploadProps {
  /**
   * Callback to be called when the upload button is clicked passing the file as first arg and a setter to update the upload process state to success or error
   */
  onUpload: OnUploadFuntion;
  /**
   * Callback that will run when the user clicks on Copy button
   */
  onCopy: () => void;
  /**
   * Value to be passed to display the progresss of the upload action
   */
  progress?: number;

  /**
   * Callback that will run when the user clicks on Done button
   */
  onDone?: () => void;
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

  const iconSx = { fontSize: "48px", overflow: "visible" };

  if (status === "choose-file")
    return (
      <Root>
        <CloudUploadIcon color="primary" sx={iconSx} />
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
        <CloudUploadIcon color="primary" sx={iconSx} />
        <Content>
          <Title>Upload a File</Title>
          <Description>Select a file to upload from your computer</Description>

          <input
            type="file"
            data-testid="file"
            ref={fileRef}
            hidden
            onChange={onFileChange}
          />

          <Actions>
            <InsertDriveFileIcon
              color="disabled"
              fontSize="large"
              sx={{ mr: "13.5px" }}
            />
            <Filename>{files[0].name}</Filename>
            <IconButton
              onClick={onResetFile}
              sx={{ padding: "3px", mr: "27px" }}
            >
              <CloseIcon
                sx={{ fontSize: "16px" }}
                htmlColor="rgb(92, 98, 112)"
              />
            </IconButton>
            <ActionButton onClick={onUpload}>Upload</ActionButton>
          </Actions>
        </Content>
      </Root>
    );

  if (status === "uploading") {
    return (
      <Root>
        <CloudUploadIcon color="primary" sx={iconSx} />

        <Content>
          <Title>Uploading...</Title>
          <Description>Just give us a moment to process your file.</Description>
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
        <HighlightOffIcon color="error" sx={iconSx} />
        <Content>
          <Title>Oops!</Title>
          <Description>
            Your file could not be uploaded due to an error. Try uploading it
            again?
          </Description>
          <Actions>
            <ActionButton onClick={onUpload}>Retry</ActionButton>
            <ActionButton onClick={onResetFile} sx={{ ml: "27px" }}>
              Cancel
            </ActionButton>
          </Actions>
        </Content>
      </Root>
    );
  }
  if (status === "success") {
    return (
      <Root>
        <CheckCircleOutlineIcon color="success" sx={iconSx} />
        <Content>
          <Title>Upload Successful!</Title>
          <Description>
            Your file has been uploaded. You can copy the link to your
            clipboard.
          </Description>
          <Actions>
            <ActionButton onClick={onLinkCopy} disabled={copy}>
              {copy ? "Copied!" : "Copy Link"}
            </ActionButton>
            <ActionButton onClick={onUploadDone} sx={{ ml: "27px" }}>
              Done
            </ActionButton>
          </Actions>
        </Content>
      </Root>
    );
  }

  return <Box></Box>;
}
