export class Velocity {
    private _velocity: number;

    constructor(initialVelocity: number) {
        this._velocity = initialVelocity;
    }

    get velocity(): number {
        return this._velocity;
    }

    set velocity(value: number) {
        this._velocity = value;
    }
}