import React, { ReactNode } from 'react';

export type LinkAccordionProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function LinkAccordion({ children }: LinkAccordionProps) {
  return (
    <div>
      {children}
    </div>
  );
}
