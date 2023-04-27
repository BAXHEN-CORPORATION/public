import dateToWeekDay from "./date-to-week-day";

describe("dateToWeekDay", () => {
  it("should return a string", () => {
    expect(typeof dateToWeekDay(new Date())).toBe("string");
  });

  it("should require the first argument to be a Date object", () => {
    //@ts-ignore
    expect(() => dateToWeekDay()).toThrow(TypeError);
  });

  it('should return a string representing the date in the default locale ("pt-BR") when only the first argument is provided', () => {
    expect(dateToWeekDay(new Date("2023-04-26"))).toBe("ter.");
  });

  it("should return a string representing the date in the specified locale when the second argument is a string", () => {
    expect(dateToWeekDay(new Date("2023-04-26"), { locales: "en-US" })).toBe(
      "Tue"
    );
  });

  it("should return a string representing the date in all locales specified in an array when the second argument is an array of strings", () => {
    // const locales = ["en-US", "de-DE", "es-ES"];
    // const expected = ["4/26/2023", "26.04.2023", "26/04/2023"];
    // expect(
    //   locales.map((l) => dateToWeekDay(new Date("2023-04-26"), { locales: l }))
    // ).toEqual(expected);
  });

  it('should return a string representing the date with the weekday in the default format ("short") when the second argument is not provided', () => {
    // expect(dateToWeekDay(new Date("2023-04-26"))).toBe("26/04/2023");
  });

  it('should return a string representing the date with the weekday in the "long" format when the second argument has the "weekday" key with a value of "long"', () => {
    // expect(dateToWeekDay(new Date("2023-04-26"), { weekday: "long" })).toBe(
    //   "quarta-feira, 26 de abril de 2023"
    // );
  });

  it('should return a string representing the date with the weekday in the "narrow" format when the second argument has the "weekday" key with a value of "narrow"', () => {
    // expect(dateToWeekDay(new Date("2023-04-26"), { weekday: "narrow" })).toBe(
    //   "26/04/2023"
    // );
  });
});
