/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type User_user = {
    readonly name: string | null;
    readonly avatarUrl: unknown;
    readonly bioHTML: unknown;
    readonly createdAt: unknown;
    readonly email: string;
    readonly followers: {
        readonly totalCount: number;
    };
    readonly following: {
        readonly totalCount: number;
    };
    readonly login: string;
    readonly websiteUrl: unknown | null;
    readonly url: unknown;
    readonly repositories: {
        readonly totalCount: number;
        readonly nodes: ReadonlyArray<{
            readonly name: string;
            readonly stargazerCount: number;
            readonly createdAt: unknown;
        } | null> | null;
    };
    readonly " $refType": "User_user";
};
export type User_user$data = User_user;
export type User_user$key = {
    readonly " $data"?: User_user$data;
    readonly " $fragmentRefs": FragmentRefs<"User_user">;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any), v1 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
    } as any), v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
    } as any), v3 = [
        (v2 /*: any*/)
    ];
    return {
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "User_user",
        "selections": [
            (v0 /*: any*/),
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatarUrl",
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "bioHTML",
                "storageKey": null
            },
            (v1 /*: any*/),
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "concreteType": "FollowerConnection",
                "kind": "LinkedField",
                "name": "followers",
                "plural": false,
                "selections": (v3 /*: any*/),
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "concreteType": "FollowingConnection",
                "kind": "LinkedField",
                "name": "following",
                "plural": false,
                "selections": (v3 /*: any*/),
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "login",
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "websiteUrl",
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
            },
            {
                "alias": null,
                "args": [
                    {
                        "kind": "Literal",
                        "name": "isFork",
                        "value": false
                    },
                    {
                        "kind": "Literal",
                        "name": "last",
                        "value": 10
                    },
                    {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": {
                            "direction": "ASC",
                            "field": "STARGAZERS"
                        }
                    }
                ],
                "concreteType": "RepositoryConnection",
                "kind": "LinkedField",
                "name": "repositories",
                "plural": false,
                "selections": [
                    (v2 /*: any*/),
                    {
                        "alias": null,
                        "args": null,
                        "concreteType": "Repository",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                            (v0 /*: any*/),
                            {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "stargazerCount",
                                "storageKey": null
                            },
                            (v1 /*: any*/)
                        ],
                        "storageKey": null
                    }
                ],
                "storageKey": "repositories(isFork:false,last:10,orderBy:{\"direction\":\"ASC\",\"field\":\"STARGAZERS\"})"
            }
        ],
        "type": "User",
        "abstractKey": null
    } as any;
})();
(node as any).hash = 'c3d55c3a54cec83f99c7dc42b8ee8cca';
export default node;
