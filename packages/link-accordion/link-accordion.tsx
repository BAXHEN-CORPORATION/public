import React, { ReactNode } from "react";

export type LinkAccordionProps = {
  /**
   * the title to be rendered on the summary
   */

  title: string;
};

export function LinkAccordion({ title }: LinkAccordionProps) {
  return (
    <details>
      <summary>{title}</summary>
    </details>
  );
}
