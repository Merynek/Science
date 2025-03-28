import {LengthUnit} from "@/src/models/values/Units.enum";
import {Length} from "@/src/models/values/Length";

export class LengthConversion {
    private static readonly _millimetersInMeter = 1000;
    private static readonly _centimetersInMeter = 100;
    private static readonly _metersInKiloMeter = 1000;

    public static getMeters(length: Length): number {
        switch (length.basicUnit) {
            case LengthUnit.MILLIMETERS:
                return length.basicValue / this._millimetersInMeter;
            case LengthUnit.CENTIMETERS:
                return length.basicValue / this._centimetersInMeter;
            case LengthUnit.METERS:
                return length.basicValue;
            case LengthUnit.KILOMETERS:
                return length.basicValue * this._metersInKiloMeter;
        }
    }

    public static lengthConversion(length: Length, unit: LengthUnit): number {
        if (length.basicUnit === unit) {
            return length.basicValue;
        }
        const meters = LengthConversion.getMeters(length);

        switch (unit) {
            case LengthUnit.MILLIMETERS:
                return meters * this._millimetersInMeter;
            case LengthUnit.CENTIMETERS:
                return meters * this._centimetersInMeter;
            case LengthUnit.METERS:
                return meters;
            case LengthUnit.KILOMETERS:
                return meters / this._metersInKiloMeter;
        }
    }
}