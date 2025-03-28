import {LengthUnit} from "@/src/models/values/Units.enum";
import {Length} from "@/src/models/values/Length";

describe("Models", () => {
    describe("Values", () => {
        describe("Length", () => {
            it("init values", () => {
                const length = new Length(100);

                expect(length.basicValue).toBe(100);
                expect(length.basicUnit).toBe(LengthUnit.METERS);
                expect(length.getValue(LengthUnit.KILOMETERS)).toBe(0.1);
            });
        })
    })
})