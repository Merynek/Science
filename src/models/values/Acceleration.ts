import {Time} from "@/src/models/values/Time";
import {Velocity} from "@/src/models/values/Velocity";

export class Acceleration {
    private _velocity: Velocity;
    private _time: Time;

    constructor(velocity: Velocity, time: Time) {
        this._velocity = velocity;
        this._time = time;
    }

    get value() {
        return this._velocity.value / this._time.basicValue;
    }

    get time(): Time {
        return this._time;
    }

    set time(value: Time) {
        this._time = value;
    }

    get velocity(): Velocity {
        return this._velocity;
    }

    set velocity(value: Velocity) {
        this._velocity = value;
    }
}