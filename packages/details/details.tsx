import React, { ReactNode } from "react";

export interface DetailsProps {
  /**
   * the title to be rendered on the summary
   */

  title: string;
  // /**
  //  * the content to be rendered on the details
  //  */

  // content: string | ReactNode;
}

export function Details({ title }: DetailsProps) {
  return (
    <details>
      <summary>{title}</summary>
    </details>
  );
}
