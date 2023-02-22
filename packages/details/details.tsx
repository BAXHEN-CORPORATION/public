import React, { ReactNode } from "react";

export interface DetailsProps {
  /**
   * the content to be rendered on the details
   */

  content: string | ReactNode;
}

export function Details({}: DetailsProps) {
  return (
    <details>
      <summary>Details</summary>
    </details>
  );
}
