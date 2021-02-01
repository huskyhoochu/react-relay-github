/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type User_user = {
    readonly name: string | null;
    readonly " $refType": "User_user";
};
export type User_user$data = User_user;
export type User_user$key = {
    readonly " $data"?: User_user$data;
    readonly " $fragmentRefs": FragmentRefs<"User_user">;
};



const node: ReaderFragment = ({
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
        }
    ],
    "type": "User",
    "abstractKey": null
} as any);
(node as any).hash = 'bb619cae48870ab9ff47501f560dfd65';
export default node;
