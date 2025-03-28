import {VelocityUnit} from "@/src/models/values/Units.enum";
import {Velocity} from "@/src/models/values/Velocity";

export class VelocityConversion {
    private static readonly _multiplier_ms_kmh  = 3.6;

    public static getMetersPerSecond(velocity: Velocity): number {
        switch (velocity.basicUnit) {
            case VelocityUnit.M_PER_SECOND:
                return velocity.basicValue;
            case VelocityUnit.KM_PER_HOUR:
                return velocity.basicValue / this._multiplier_ms_kmh;
        }
    }

    public static velocityConversion(velocity: Velocity, unit: VelocityUnit): number {
        if (velocity.basicUnit === unit) {
            return velocity.basicValue;
        }
        const metersPerSecond = VelocityConversion.getMetersPerSecond(velocity);

        switch (unit) {
            case VelocityUnit.M_PER_SECOND:
                return metersPerSecond;
            case VelocityUnit.KM_PER_HOUR:
                return metersPerSecond * this._multiplier_ms_kmh;
        }
    }
}