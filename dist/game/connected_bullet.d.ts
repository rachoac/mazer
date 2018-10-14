/// <reference types="aframe" />
import { StoreAwareRepositoryComponent } from "aframe-typescript-redux";
import { Bullets, Bullet } from "../redux/core";
import { Store } from "redux";
import { Vector3 } from "three";
interface Props {
    bullets: Bullets;
}
interface Schema {
    id: string;
    origin: Vector3;
    cameraDirection: any;
    bullet: Bullet;
    dead: boolean;
}
export default class ConnectedBullet extends StoreAwareRepositoryComponent<Props, Bullet, Bullets, Schema> {
    constructor(store: Store, props?: Props);
    resolveRepository(props: Props): Bullets;
    resolveStoreObject(schema: Schema): Bullet;
    onStoreObjectCreate(bullet: Bullet): AFrame.ANode;
    onStoreObjectUpdate(bullet: Bullet, component: this): void;
    hey(): void;
    init(): void;
    tick(): void;
}
export {};
