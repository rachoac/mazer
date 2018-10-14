/// <reference types="aframe" />
import { ComponentWrapper } from "aframe-typescript-toolkit";
import { Vector3, Object3D } from "three";
interface Schema {
    default: string;
    parse: any;
    stringify: any;
}
export declare class SlowLookAt extends ComponentWrapper<Schema> {
    vector: Vector3;
    target3D: Object3D;
    ts: number;
    turnSpeed: number;
    constructor();
    init(): void;
    /**
     * If tracking an object, this will be called on every tick.
     * If looking at a position vector, this will only be called once (until further updates).
     */
    update(): void;
    tick(): void;
    beginTracking(targetEl: AFrame.Entity): void;
}
export {};
