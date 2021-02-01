/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type User_user = {
    readonly name: string | null;
    readonly avatarUrl: unknown;
    readonly bioHTML: unknown;
    readonly followers: {
        readonly totalCount: number;
    };
    readonly following: {
        readonly totalCount: number;
    };
    readonly " $refType": "User_user";
};
export type User_user$data = User_user;
export type User_user$key = {
    readonly " $data"?: User_user$data;
    readonly " $fragmentRefs": FragmentRefs<"User_user">;
};



const node: ReaderFragment = (function () {
    var v0 = [
        ({
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
        } as any)
    ];
    return {
        "argumentDefinitions": [],
        "kind": "Fragment",
        "metadata": null,
        "name": "User_user",
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
            },
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
            {
                "alias": null,
                "args": null,
                "concreteType": "FollowerConnection",
                "kind": "LinkedField",
                "name": "followers",
                "plural": false,
                "selections": (v0 /*: any*/),
                "storageKey": null
            },
            {
                "alias": null,
                "args": null,
                "concreteType": "FollowingConnection",
                "kind": "LinkedField",
                "name": "following",
                "plural": false,
                "selections": (v0 /*: any*/),
                "storageKey": null
            }
        ],
        "type": "User",
        "abstractKey": null
    } as any;
})();
(node as any).hash = '316c4e686be57065f75d14017422033a';
export default node;
