import {TimeUnit} from "@/src/models/values/Units.enum";
import {ValueWithUnit} from "@/src/models/values/ValueWithUnit";
import {TimeConversion} from "@/src/models/values/conversions/TimeConversion";

export class Time extends ValueWithUnit<TimeUnit> {
    constructor(value: number, unit: TimeUnit = TimeUnit.SECONDS) {
        super(value, unit);
    }

    public getValue(unit: TimeUnit = TimeUnit.SECONDS) {
        return TimeConversion.timeConversion(this, unit);
    }
}