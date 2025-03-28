import {Length} from "@/src/models/values/Length";
import {Time} from "@/src/models/values/Time";

export class Velocity {
    private readonly _length: Length;
    private readonly _time: Time;

    constructor(length: Length, time: Time) {
        this._length = length;
        this._time = time;
    }

    get value() {
        return this._length.basicValue / this._time.basicValue;
    }

    get time(): Time {
        return this._time;
    }

    get length(): Length {
        return this._length;
    }
}