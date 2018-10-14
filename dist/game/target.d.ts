/// <reference types="aframe" />
import { StoreAwareRepositoryComponent } from "aframe-typescript-redux";
import { Targets, Target } from "../redux/core";
import { Store } from "redux";
import { Vector3 } from "three";
interface Props {
    readonly ready: boolean;
    readonly targets: Targets;
}
interface Schema {
    id: string;
    origin: Vector3;
    target: Target;
    dead: boolean;
}
export declare class TargetComponent extends StoreAwareRepositoryComponent<Props, Target, Targets, Schema> {
    constructor(store: Store, props?: Props);
    resolveRepository(props: Props): Targets;
    resolveStoreObject(schema: Schema): Target;
    onStoreObjectCreate(target: Target): AFrame.ANode;
    onStoreObjectUpdate(target: Target, component: this): void;
    init(): void;
    tick(): void;
}
export {};
