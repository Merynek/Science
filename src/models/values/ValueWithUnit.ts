import {LengthUnit, TimeUnit, VelocityUnit} from "@/src/models/values/Units.enum";

type Unit = TimeUnit | LengthUnit | VelocityUnit;

export abstract class ValueWithUnit<T extends Unit> {
    private readonly _basicValue: number;
    private readonly _basicUnit: T;

    protected constructor(basicValue: number, unit: T) {
        this._basicValue = basicValue;
        this._basicUnit = unit;
    }

    get basicUnit(): T {
        return this._basicUnit;
    }

    get basicValue(): number {
        return this._basicValue;
    }

    abstract getValue(unit: T): number;
}