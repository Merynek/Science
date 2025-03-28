import {IAccelerationModel} from "@/src/engine/physics/models/acceleration/IAccelerationModel";

export class GravityAcceleration implements IAccelerationModel {
    private readonly _acceleration: number;

    constructor() {
        this._acceleration = 9.81;
    }

    get acceleration(): number {
        return this._acceleration;
    }
}