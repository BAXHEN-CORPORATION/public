import React, { ReactNode } from "react";

export interface DetailsProps {
  /**
   * the title to be rendered on the summary
   */

  title: string;
  /**
   * the content to be rendered on the details
   */

  children: string | ReactNode;
}

export function Details({ title, children }: DetailsProps) {
  return (
    <details>
      <summary>{title}</summary>
      <p>{children}</p>
    </details>
  );
}
