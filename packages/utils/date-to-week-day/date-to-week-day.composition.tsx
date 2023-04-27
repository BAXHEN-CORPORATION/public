import React from "react";
import { dateToWeekDay } from "./date-to-week-day";

export function ReturnsCorrectValue() {
  return <div>{dateToWeekDay(new Date())}</div>;
}
