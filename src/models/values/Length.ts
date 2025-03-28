import {LengthUnit} from "@/src/models/values/Units.enum";
import {ValueWithUnit} from "@/src/models/values/ValueWithUnit";
import {LengthConversion} from "@/src/models/values/conversions/LengthConversion";

export class Length extends ValueWithUnit<LengthUnit> {
    constructor(value: number, unit: LengthUnit = LengthUnit.METERS) {
        super(value, unit);
    }

    public getValue(unit: LengthUnit = LengthUnit.METERS) {
        return LengthConversion.lengthConversion(this, unit);
    }
}