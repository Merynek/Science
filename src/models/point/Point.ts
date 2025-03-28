export class Point {
    private readonly _x: number;
    private readonly _y: number;
    private readonly _z: number;

    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    get y(): number {
        return this._y;
    }

    get x(): number {
        return this._x;
    }
}