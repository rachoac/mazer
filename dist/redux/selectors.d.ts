import { AppState, Bullets, Explosions, Targets } from "./core";
export declare function selectBullets(state: AppState): Bullets;
export declare function selectTargets(state: AppState): Targets;
export declare function selectTotalFired(state: AppState): number;
export declare function selectScore(state: AppState): number;
export declare function selectExplosions(state: AppState): Explosions;
export declare function selectReady(state: AppState): boolean;
