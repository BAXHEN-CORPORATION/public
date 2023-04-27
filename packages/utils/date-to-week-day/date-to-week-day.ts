export interface DateToWeekDayOptions {
  /**
   * Weekday format options
   * @default "short"
   * */

  weekday?: Intl.DateTimeFormatOptions["weekday"];
  /**
   * Locales options
   * @default "pt-BR"
   * */
  locales?: string | string[];
}

export type DateToWeekDayFunction = (
  date: Date,
  options?: DateToWeekDayOptions
) => string;

/**
 * Converts a Date object on it weekday short representation
 * @param {Date} date - object with all the options to customize
 * @param {DateToWeekDayOptions} options - object with all the options to customize
 * */

export const dateToWeekDay: DateToWeekDayFunction = (
  date,
  { weekday = "short", locales = "pt-BR" } = {}
) => {
  return date.toLocaleString(locales, {
    weekday,
  });
};
