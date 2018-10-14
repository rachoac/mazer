/// <reference types="aframe" />
import { ComponentWrapper } from "aframe-typescript-toolkit";
export interface Props {
    readonly score: number;
    readonly ready: boolean;
}
export interface ScoreSchema {
    text: any;
}
interface CallbackEvent {
    detail: {
        oldState: {};
        newState: {};
    };
}
export declare class ScoreComponent extends ComponentWrapper<ScoreSchema> {
    constructor();
    createEntity(): AFrame.Entity;
    update(): void;
    updateScore(evt: CallbackEvent): void;
    ready(evt: Event): void;
    init(): void;
}
export {};
