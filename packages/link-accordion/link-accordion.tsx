import React, { ReactNode } from "react";

import type { AccordionLink } from "./types";

export interface LinkAccordionProps {
  /**
   * the title to be rendered on the summary
   */

  title: string;
  /**
   * the title to be rendered on the summary
   */

  links: AccordionLink[];
}

export function LinkAccordion({ title, links = [] }: LinkAccordionProps) {
  return (
    <details>
      <summary>{title}</summary>
      <div>
        {links.map((link) => {
          return (
            <div key={link.detail + link.label}>
              <a>{link.label}</a> <p>{link.detail}</p>
            </div>
          );
        })}
      </div>
    </details>
  );
}
