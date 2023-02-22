import { Palette, PaletteColor } from "@mui/material";

export type GetKeysOfType<
  Type extends Record<string, any>,
  Obj extends Record<string, any>
> = keyof {
  [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};
export type SummaryFocusColor = GetKeysOfType<PaletteColor, Palette>;
