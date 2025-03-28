import {TimeUnit} from "@/src/models/values/Units.enum";
import {Time} from "@/src/models/values/Time";

describe("Models", () => {
    describe("Values", () => {
        describe("Time", () => {
            it("init values", () => {
                const time = new Time(60);

                expect(time.basicValue).toBe(60);
                expect(time.basicUnit).toBe(TimeUnit.SECONDS);
                expect(time.getValue(TimeUnit.MINUTES)).toBe(1);
            });
        })
    })
})