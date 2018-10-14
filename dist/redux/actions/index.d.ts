import { Bullets, BulletInfo, Explosions, Collision, Targets } from "../core";
export interface InitializeAction {
    readonly type: "INITIALIZE";
    readonly ready: boolean;
}
declare const initialize: (ready: boolean) => InitializeAction;
export interface SetBulletsAction {
    readonly type: "SET_BULLETS";
    readonly bullets: Bullets;
}
declare const setBullets: (bullets: Bullets) => SetBulletsAction;
export interface CreateBulletAction {
    readonly type: "CREATE_BULLET";
}
declare const createBullet: () => CreateBulletAction;
export interface DestroyBulletAction {
    readonly type: "DESTROY_BULLET";
    readonly id: string;
}
declare const destroyBullet: (id: string) => DestroyBulletAction;
export interface SetExplosionsAction {
    readonly type: "SET_EXPLOSIONS";
    readonly explosions: Explosions;
}
declare const setExplosions: (explosions: Explosions) => SetExplosionsAction;
export interface DestroyExplosionAction {
    readonly type: "DESTROY_EXPLOSION";
    readonly id: string;
}
declare const destroyExplosion: (id: string) => DestroyExplosionAction;
export interface OutOfBoundsBulletsAction {
    readonly type: "OUT_OF_BOUNDS_BULLETS";
    readonly bulletInfos: BulletInfo[];
}
declare const outOfBoundsBullets: (bulletInfos: BulletInfo[]) => OutOfBoundsBulletsAction;
export interface SetTotalFiredAction {
    readonly type: "SET_TOTAL_FIRED";
    readonly total: number;
}
declare const setTotalFired: (total: number) => SetTotalFiredAction;
export interface SetScoreAction {
    readonly type: "SET_SCORE";
    readonly score: number;
}
declare const setScore: (score: number) => SetScoreAction;
export interface CollisionsAction {
    readonly type: "COLLISIONS";
    readonly collisions: Collision[];
}
declare const collisions: (collisions: Collision[]) => CollisionsAction;
export interface SetTargetsAction {
    readonly type: "SET_TARGETS";
    readonly targets: Targets;
}
declare const setTargets: (targets: Targets) => SetTargetsAction;
export declare type Action = InitializeAction | SetBulletsAction | CreateBulletAction | DestroyBulletAction | OutOfBoundsBulletsAction | SetExplosionsAction | SetTotalFiredAction | CollisionsAction | SetScoreAction | DestroyExplosionAction | SetTargetsAction;
export { initialize, setBullets, createBullet, destroyBullet, outOfBoundsBullets, setExplosions, setTotalFired, collisions, setScore, destroyExplosion, setTargets, };
