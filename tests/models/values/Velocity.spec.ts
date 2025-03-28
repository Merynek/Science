import {VelocityUnit} from "@/src/models/values/Units.enum";
import {Velocity} from "@/src/models/values/Velocity";

describe("Models", () => {
    describe("Values", () => {
        describe("Velocity", () => {
            it("init values", () => {
                const velocity = new Velocity(100);

                expect(velocity.basicValue).toBe(100);
                expect(velocity.basicUnit).toBe(VelocityUnit.M_PER_SECOND);
                expect(velocity.getValue(VelocityUnit.KM_PER_HOUR)).toBe(360);
            });
        })
    })
})