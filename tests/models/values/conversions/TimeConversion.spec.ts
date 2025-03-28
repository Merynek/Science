import {TimeConversion} from "@/src/models/values/conversions/TimeConversion";
import {TimeUnit} from "@/src/models/values/Units.enum";
import {Time} from "@/src/models/values/Time";

describe("Models", () => {
    describe("Values", () => {
        describe("Conversions", () => {
            describe("Time", () => {
                it ("time in seconds", () => {
                    let seconds = TimeConversion.getSeconds(new Time(1000, TimeUnit.MILLISECONDS));
                    expect(seconds).toBe(1);

                    seconds = TimeConversion.getSeconds(new Time(1, TimeUnit.SECONDS));
                    expect(seconds).toBe(1);

                    seconds = TimeConversion.getSeconds(new Time(1, TimeUnit.MINUTES));
                    expect(seconds).toBe(60);

                    seconds = TimeConversion.getSeconds(new Time(1, TimeUnit.HOURS));
                    expect(seconds).toBe(3600);

                    seconds = TimeConversion.getSeconds(new Time(1, TimeUnit.DAYS));
                    expect(seconds).toBe(86400);
                });

                it ("time conversion", () => {
                    let time = new Time(1, TimeUnit.SECONDS);
                    expect(TimeConversion.timeConversion(time, TimeUnit.MILLISECONDS)).toBe(1000);

                    time = new Time(1, TimeUnit.SECONDS);
                    expect(TimeConversion.timeConversion(time, TimeUnit.SECONDS)).toBe(1);

                    time = new Time(60, TimeUnit.SECONDS);
                    expect(TimeConversion.timeConversion(time, TimeUnit.MINUTES)).toBe(1);

                    time = new Time(3600, TimeUnit.SECONDS);
                    expect(TimeConversion.timeConversion(time, TimeUnit.HOURS)).toBe(1);

                    time = new Time(86400, TimeUnit.SECONDS);
                    expect(TimeConversion.timeConversion(time, TimeUnit.DAYS)).toBe(1);
                })
            })
        })
    })
})