/// <reference types="aframe" />
import { StoreAwareRepositoryComponent } from "aframe-typescript-redux";
import { Explosion, Explosions } from "../redux/core";
import { Store } from "redux";
interface Props {
    readonly explosions: Explosions;
}
interface Schema {
    readonly explosion: Explosion;
    tickCount: number;
    size: number;
    direction: number;
    dead: boolean;
}
export declare class ExplosionComponent extends StoreAwareRepositoryComponent<Props, Explosion, Explosions, Schema> {
    constructor(store: Store, props?: Props);
    resolveRepository(props: Props): Explosions;
    resolveStoreObject(schema: Schema): Explosion;
    onStoreObjectCreate(explosion: Explosion): AFrame.ANode;
    tick(): void;
}
export {};
