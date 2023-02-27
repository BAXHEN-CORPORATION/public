import { Palette, PaletteColor } from "@mui/material";
import { LinkAccordionProps } from "../link-accordion";

export type GetKeysOfType<
  Type extends Record<string, any>,
  Obj extends Record<string, any>
> = keyof {
  [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};

export interface OwnerState {
  ownerState: LinkAccordionProps & { color: LinkAccordionColor };
}

export type LinkAccordionColor = GetKeysOfType<PaletteColor, Palette>;
export interface AccordionLink {
  label: string;
  detail: string;
}
