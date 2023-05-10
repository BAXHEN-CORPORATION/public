import dateToWeekDay from "./date-to-week-day";

// First use case of a truth table

const tests = [
  [
    'return a string representing the date in the default locale ("pt-BR") and default weekday "short" when only the first argument is provided',
    "2023-04-26",
    undefined,
    "ter.",
  ],
  [
    "return a string representing the date in the specified locale when the second argument is a string",
    "2023-04-26",
    { locales: "en-US" },
    "Tue",
  ],
  [
    'return a string representing the date with the weekday in the "long" format when the second argument has the "weekday" key with a value of "long"',
    "2023-04-26",
    { weekday: "long" },
    "terça-feira",
  ],
  [
    'return a string representing the date with the weekday in the "narrow" format when the second argument has the "weekday" key with a value of "narrow"',
    "2023-04-26",
    { weekday: "narrow" },
    "T",
  ],
] as const;

describe("dateToWeekDay", () => {
  tests.forEach((test) => {
    const [assertion, date, options, expected] = test;
    it(`should ${assertion}`, () => {
      if (date) {
        expect(dateToWeekDay(new Date(date), options)).toBe(expected);
        return;
      }
      expect(dateToWeekDay(new Date(), options)).toBe(expected);
    });
  });
});
