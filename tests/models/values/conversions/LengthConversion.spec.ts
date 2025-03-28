import {LengthUnit} from "@/src/models/values/Units.enum";
import {LengthConversion} from "@/src/models/values/conversions/LengthConversion";
import {Length} from "@/src/models/values/Length";

describe("Models", () => {
    describe("Values", () => {
        describe("Conversions", () => {
            describe("Length", () => {
                it ("length in meters", () => {
                    let meters = LengthConversion.getMeters(new Length(1000, LengthUnit.MILLIMETERS));
                    expect(meters).toBe(1);

                    meters = LengthConversion.getMeters(new Length(100, LengthUnit.CENTIMETERS));
                    expect(meters).toBe(1);

                    meters = LengthConversion.getMeters(new Length(1, LengthUnit.METERS));
                    expect(meters).toBe(1);

                    meters = LengthConversion.getMeters(new Length(1, LengthUnit.KILOMETERS));
                    expect(meters).toBe(1000);
                });

                it ("length conversion", () => {
                    let length = new Length(1, LengthUnit.METERS);
                    expect(LengthConversion.lengthConversion(length, LengthUnit.MILLIMETERS)).toBe(1000);

                    length = new Length(1, LengthUnit.METERS);
                    expect(LengthConversion.lengthConversion(length, LengthUnit.CENTIMETERS)).toBe(100);

                    length = new Length(1, LengthUnit.METERS);
                    expect(LengthConversion.lengthConversion(length, LengthUnit.METERS)).toBe(1);

                    length = new Length(1000, LengthUnit.METERS);
                    expect(LengthConversion.lengthConversion(length, LengthUnit.KILOMETERS)).toBe(1);
                })
            })
        })
    })
})