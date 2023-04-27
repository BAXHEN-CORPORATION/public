import React from "react";
import { dateToWeekDay } from "./date-to-week-day";

export function ReturnsDateWeekdayDefault() {
  return <div>{dateToWeekDay(new Date())}</div>;
}
export function ReturnsDateWeekdayNarrow() {
  return <div>{dateToWeekDay(new Date(), { weekday: "narrow" })}</div>;
}
export function ReturnsDateWeekdayLong() {
  return <div>{dateToWeekDay(new Date(), { weekday: "long" })}</div>;
}
export function ReturnsDateWeekdayCustomLocale() {
  return (
    <div>
      {dateToWeekDay(new Date(), { weekday: "short", locales: "en-US" })}
    </div>
  );
}
