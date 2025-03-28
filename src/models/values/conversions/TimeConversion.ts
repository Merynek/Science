import {TimeUnit} from "@/src/models/values/Units.enum";
import {Time} from "@/src/models/values/Time";

export class TimeConversion {
    private static readonly _millisecondsInSeconds = 1000;
    private static readonly _secondsInMinutes = 60;
    private static readonly _secondsInHours = this._secondsInMinutes * 60;
    private static readonly _secondsInDays = this._secondsInHours * 24;

    public static getSeconds(time: Time): number {
        switch (time.basicUnit) {
            case TimeUnit.MILLISECONDS:
                return time.basicValue / this._millisecondsInSeconds;
            case TimeUnit.SECONDS:
                return time.basicValue;
            case TimeUnit.MINUTES:
                return time.basicValue * this._secondsInMinutes;
            case TimeUnit.HOURS:
                return time.basicValue * this._secondsInHours;
            case TimeUnit.DAYS:
                return time.basicValue * this._secondsInDays;
        }
    }

    public static timeConversion(time: Time, unit: TimeUnit): number {
        if (time.basicUnit === unit) {
            return time.basicValue;
        }
        const seconds = TimeConversion.getSeconds(time);

        switch (unit) {
            case TimeUnit.MILLISECONDS:
                return seconds * this._millisecondsInSeconds;
            case TimeUnit.SECONDS:
                return seconds;
            case TimeUnit.MINUTES:
                return seconds / this._secondsInMinutes;
            case TimeUnit.HOURS:
                return seconds / this._secondsInHours;
            case TimeUnit.DAYS:
                return seconds / this._secondsInDays;
        }
    }
}