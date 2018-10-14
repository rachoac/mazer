import { Vector3 } from "three";
export interface BaseMap<T> {
    [key: string]: T;
}
export interface RepositoryMember {
    readonly id: string;
}
export interface BaseRepository<T extends RepositoryMember = RepositoryMember> {
    readonly items: BaseMap<T>;
    readonly sort: ReadonlyArray<string>;
}
export interface RepositoryMemberInfo {
    readonly id: string;
    readonly repository: string;
}
export interface Bullet extends RepositoryMember {
    readonly range: number;
    readonly ts: number;
}
export interface Bullets extends BaseRepository<Bullet> {
}
export interface BulletInfo {
    readonly bullet: Bullet;
    readonly lastPos: Vector3;
}
export interface Explosion extends RepositoryMember {
    readonly origin: Vector3;
}
export interface Explosions extends BaseRepository<Explosion> {
}
export interface Target extends RepositoryMember {
    readonly origin: Vector3;
}
export interface Targets extends BaseRepository<Target> {
}
export interface AppState {
    readonly ready: boolean;
    readonly bullets: Bullets;
    readonly targets: Targets;
    readonly totalFired: number;
    readonly score: number;
    readonly explosions: Explosions;
}
export declare const defaultAppState: AppState;
export interface Collision {
    readonly location: Vector3;
    readonly a: RepositoryMemberInfo;
    readonly b: RepositoryMemberInfo;
}
export declare const INITIAL_STATE: AppState;
