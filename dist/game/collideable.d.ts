import { ComponentWrapper } from "aframe-typescript-toolkit";
import { StoreAwareSystem } from "aframe-typescript-redux";
import { Store } from "redux";
import { RepositoryMemberInfo, Collision, BaseMap, BaseRepository } from "../redux/core";
import { FlushingCache } from "../framework/toolkit/cache";
interface CollideableSchema {
    readonly repositoryMemberInfo: RepositoryMemberInfo;
}
declare class CollideableComponent extends ComponentWrapper<CollideableSchema, CollideableSystem> {
    constructor();
    init(): void;
}
interface CollideableSystemProps extends BaseMap<BaseRepository> {
}
interface CollideableContainer {
    component: CollideableComponent;
    repositoryMemberInfo?: RepositoryMemberInfo;
}
interface CollideableSharedState {
    collideables: CollideableContainer[];
    uniqueRepositories: string[];
}
export declare class CollideableSystem extends StoreAwareSystem<CollideableSystemProps, CollideableSharedState> {
    collisonCache: FlushingCache<Collision>;
    constructor(store: Store, props: CollideableSystemProps);
    contains(cache: Collision[], obj: Collision): boolean;
    tick(): void;
    addCollideable(collideable: CollideableComponent): void;
    componentWillReceiveProps(props: CollideableSystemProps, nextProps: CollideableSystemProps): void;
    determineEntitiesToDestroy(props: CollideableSystemProps, nextProps: CollideableSystemProps): RepositoryMemberInfo[];
    onStoreObjectDestroy(entity: RepositoryMemberInfo): void;
    getCollideables(): CollideableContainer[];
    getUniqueRepositories(): string[];
    updateCollideables(collideables: CollideableContainer[]): void;
    dispatchCollision(collided: Collision[]): void;
}
export {};
