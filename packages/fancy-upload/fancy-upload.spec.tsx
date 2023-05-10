import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BasicFancyUpload } from "./fancy-upload.composition";
import { act } from "@testing-library/react";
import {
  FancyUploadProps,
  OnUploadFuntion,
  UpadateStatusFunction,
} from "./fancy-upload";

type CallbackKeys = "upload" | "upload-success" | "upload-error";

type Actions =
  | "upload-file"
  | "cancel"
  | "remove"
  | "copy"
  | "retry"
  | "done"
  | CallbackKeys;
type PropsMockKeys = keyof Omit<FancyUploadProps, "progress">;
type Callbacks = { [key in CallbackKeys]: OnUploadFuntion };

const filename = "chucknorris.png";

const initialStateExpectations = [
  {
    getter: "getByText",
    query: /Upload a File/,
    expector: "toBeTruthy",
  },
  {
    getter: "getByText",
    query: /Select a file to upload/,
    expector: "toBeTruthy",
  },
  {
    getter: "getByText",
    query: "Choose File",
    expector: "toBeTruthy",
  },
  {
    getter: "getByTestId",
    query: "CloudUploadIcon",
    expector: "toBeTruthy",
  },
];

const tests = [
  {
    assertion:
      "show the default title, description, icon and choose file button",
    expectations: initialStateExpectations,
  },
  {
    assertion:
      "show the filename, remove icon, the default icon, the upload button and hide the choose file button after choosing a file",
    actions: ["upload-file"] as Actions[],
    expectations: [
      {
        getter: "getByTestId",
        query: "InsertDriveFileIcon",
        expector: "toBeTruthy",
      },
      { getter: "getByTestId", query: "CloseIcon", expector: "toBeTruthy" },
      { getter: "getByText", query: filename, expector: "toBeTruthy" },
      { getter: "getByText", query: "Upload", expector: "toBeTruthy" },
      { getter: "queryByText", query: /Choose File/, expector: "toBeNull" },
    ],
  },

  {
    assertion:
      "show the filename, remove icon, the default icon and the upload button after choosing a file",
    actions: ["upload-file", "remove"] as Actions[],
    expectations: [
      {
        getter: "queryByTestId",
        query: "InsertDriveFileIcon",
        expector: "toBeNull",
      },
      { getter: "queryByTestId", query: "CloseIcon", expector: "toBeNull" },
      { getter: "queryByText", query: filename, expector: "toBeNull" },
      { getter: "queryByText", query: "Upload", expector: "toBeNull" },
    ],
  },
  {
    assertion:
      "start the uploading after upload button is clicked, show the default uploading label, default description and progress bar",
    actions: ["upload-file", "upload"] as Actions[],
    action: "upload" as CallbackKeys,
    expectations: [
      {
        getter: "getByText",
        query: "Uploading...",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: /Just give us a moment/,
        expector: "toBeTruthy",
      },
      {
        getter: "queryByTestId",
        query: "progress-bar",
        expector: "toBeTruthy",
      },
    ],
  },
  {
    assertion:
      "show success default title, description and actions after uploading with success",
    actions: ["upload-file", "upload"] as Actions[],
    action: "upload-success" as CallbackKeys,
    waitForConfig: {
      action: "upload-success" as Actions,
      getter: "findByText",
      query: "Upload Successful!",
    },
    expectations: [
      {
        getter: "getByText",
        query: "Upload Successful!",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: /Your file has been uploaded./,
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: "Copy Link",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: "Done",
        expector: "toBeTruthy",
      },
    ],
  },
  {
    assertion:
      "show the default copied label after clicking on copy button and call onCopy callback",
    actions: ["upload-file", "upload", "copy"] as Actions[],
    action: "upload-success" as CallbackKeys,
    waitForConfig: {
      action: "upload-success" as Actions,
      getter: "findByText",
      query: "Upload Successful!",
    },
    expectations: [
      {
        getter: "getByText",
        query: "Copied!",
        expector: "toBeTruthy",
      },
    ],
    mocksExpectations: [{ mock: "onCopy" as PropsMockKeys, length: 1 }],
  },
  {
    assertion:
      "show the info before chosing a file after on done button and call onDone callback",
    actions: ["upload-file", "upload", "done"] as Actions[],
    action: "upload-success" as CallbackKeys,
    waitForConfig: {
      action: "upload-success" as Actions,
      getter: "findByText",
      query: "Upload Successful!",
    },
    expectations: initialStateExpectations,
    mocksExpectations: [{ mock: "onDone" as PropsMockKeys, length: 1 }],
  },
  {
    assertion:
      "call the upload callback again when the retry button is clicked and retry the upload",
    actions: ["upload-file", "upload"] as Actions[],
    action: "upload-error" as CallbackKeys,
    waitForConfig: {
      action: "upload-error" as Actions,
      getter: "findByText",
      query: "Oops!",
    },
    expectations: [
      {
        getter: "getByText",
        query: "Oops!",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: /Your file could not be uploaded/,
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: "Retry",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: "Cancel",
        expector: "toBeTruthy",
      },
    ],
  },
  {
    assertion:
      "show error default title, description and actions after uploading with error",
    actions: ["upload-file", "upload", "retry"] as Actions[],
    action: "upload-error" as CallbackKeys,
    waitForConfig: {
      action: "upload-error" as Actions,
      getter: "findByText",
      query: "Oops!",
    },
    expectations: [
      {
        getter: "getByText",
        query: "Oops!",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: /Your file could not be uploaded/,
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: "Retry",
        expector: "toBeTruthy",
      },
      {
        getter: "getByText",
        query: "Cancel",
        expector: "toBeTruthy",
      },
    ],
    mocksExpectations: [{ mock: "onUpload" as PropsMockKeys, length: 2 }],
  },
  {
    assertion:
      "show the title, description and button to upload after clicking cancel on error state",
    actions: ["upload-file", "upload", "cancel"] as Actions[],
    action: "upload-error" as CallbackKeys,
    waitForConfig: {
      action: "upload-error" as Actions,
      getter: "findByText",
      query: "Oops!",
    },
    expectations: initialStateExpectations,
  },
];
const file = new File(["(⌐□_□)"], filename, { type: "image/png" });
const callbacks: Callbacks = {
  "upload-error"(file, updateStatus) {
    updateStatus("error");
  },
  upload() {},
  "upload-success"(file, updateStatus) {
    updateStatus("success");
  },
};

describe("FancyUpload", () => {
  tests.forEach((test) => {
    const {
      assertion,
      expectations,
      action,
      actions,
      waitForConfig,
      mocksExpectations,
    } = test;

    const callback = callbacks[action || "upload-success"];

    it(`should ${assertion}`, async () => {
      const props = {
        onUpload: jest.fn(callback),
        onCopy: jest.fn(() => {}),
        onDone: jest.fn(() => {}),
      };

      const screen = render(<BasicFancyUpload {...props} />);

      const { getByTestId, queryByTestId, getByText } = screen;

      if (actions?.includes("upload-file")) {
        const input = getByTestId("file");

        await waitFor(() =>
          fireEvent.change(input, {
            target: { files: [file] },
          })
        );
      }

      if (actions?.includes("remove")) {
        const closeIcon = queryByTestId("CloseIcon");

        expect(closeIcon).toBeTruthy();

        await waitFor(() => fireEvent.click(closeIcon as HTMLElement));
      }
      if (actions?.includes("upload")) {
        const button = getByText("Upload");

        await waitFor(() => fireEvent.click(button as HTMLElement));
      }

      if (waitForConfig?.action) {
        const { getter, query } = waitForConfig;

        await waitFor(async () => {
          await screen[getter](query);
        });
      }

      if (actions?.includes("copy")) {
        const button = getByText("Copy Link");

        await waitFor(() => fireEvent.click(button as HTMLElement));
      }

      if (actions?.includes("done")) {
        const button = getByText("Done");

        await waitFor(() => fireEvent.click(button as HTMLElement));
      }
      if (actions?.includes("retry")) {
        const button = getByText("Retry");

        await waitFor(() => fireEvent.click(button as HTMLElement));
      }
      if (actions?.includes("cancel")) {
        const button = getByText("Cancel");

        await waitFor(() => fireEvent.click(button as HTMLElement));
      }

      expectations.forEach(({ query, getter, expector }) => {
        expect(screen[getter](query))[expector]();
      });

      mocksExpectations?.forEach(({ mock, length }) => {
        expect(props[mock].mock.calls.length).toBe(length);
      });
    });
  });
});
