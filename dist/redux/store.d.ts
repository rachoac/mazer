declare const store: import("redux").Store<{
    bullets: import("./core").Bullets;
    totalFired: number;
    score: number;
    explosions: import("./core").Explosions;
    ready: boolean;
    targets: import("./core").Targets;
}, import("./actions").Action> & {
    dispatch: {};
};
export { store, };
