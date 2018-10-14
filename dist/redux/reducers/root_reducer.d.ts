import { AppState, Bullets, Explosions, Targets } from "../core";
import { Action } from "../actions/index";
declare const rootReducer: (state: AppState, action: Action) => {
    bullets: Bullets;
    totalFired: number;
    score: number;
    explosions: Explosions;
    ready: boolean;
    targets: Targets;
};
export default rootReducer;
