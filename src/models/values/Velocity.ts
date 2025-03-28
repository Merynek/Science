import {ValueWithUnit} from "@/src/models/values/ValueWithUnit";
import {VelocityUnit} from "@/src/models/values/Units.enum";
import {VelocityConversion} from "@/src/models/values/conversions/VelocityConversion";

export class Velocity extends ValueWithUnit<VelocityUnit> {
    constructor(value: number, unit: VelocityUnit = VelocityUnit.M_PER_SECOND) {
        super(value, unit);
    }

    public getValue(unit: VelocityUnit = VelocityUnit.M_PER_SECOND) {
        return VelocityConversion.velocityConversion(this, unit);
    }
}