import {VelocityUnit} from "@/src/models/values/Units.enum";
import {VelocityConversion} from "@/src/models/values/conversions/VelocityConversion";
import {Velocity} from "@/src/models/values/Velocity";

describe("Models", () => {
    describe("Values", () => {
        describe("Conversions", () => {
            describe("Velocity", () => {
                it ("meters per seconds", () => {
                    let metersPerSecond = VelocityConversion.getMetersPerSecond(new Velocity(1, VelocityUnit.M_PER_SECOND));
                    expect(metersPerSecond).toBe(1);

                    metersPerSecond = VelocityConversion.getMetersPerSecond(new Velocity(360, VelocityUnit.KM_PER_HOUR));
                    expect(metersPerSecond).toBe(100);
                });

                it ("velocity conversion", () => {
                    let velocity = new Velocity(1, VelocityUnit.KM_PER_HOUR);
                    expect(VelocityConversion.velocityConversion(velocity, VelocityUnit.KM_PER_HOUR)).toBe(1);

                    velocity = new Velocity(360, VelocityUnit.KM_PER_HOUR);
                    expect(VelocityConversion.velocityConversion(velocity, VelocityUnit.M_PER_SECOND)).toBe(100);
                })
            })
        })
    })
})