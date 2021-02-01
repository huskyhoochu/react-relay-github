/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppUserQueryVariables = {
    login: string;
};
export type AppUserQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"User_user">;
    } | null;
};
export type AppUserQuery = {
    readonly response: AppUserQueryResponse;
    readonly variables: AppUserQueryVariables;
};



/*
query AppUserQuery(
  $login: String!
) {
  user(login: $login) {
    ...User_user
    id
  }
}

fragment User_user on User {
  name
  avatarUrl
  bioHTML
  followers {
    totalCount
  }
  following {
    totalCount
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "login"
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "login",
            "variableName": "login"
        } as any)
    ], v2 = [
        ({
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
        } as any)
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "AppUserQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                        {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "User_user"
                        }
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "AppUserQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
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
                            "selections": (v2 /*: any*/),
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "FollowingConnection",
                            "kind": "LinkedField",
                            "name": "following",
                            "plural": false,
                            "selections": (v2 /*: any*/),
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "a41a04a7dec4f1fdb73622f5e18c628b",
            "id": null,
            "metadata": {},
            "name": "AppUserQuery",
            "operationKind": "query",
            "text": "query AppUserQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  name\n  avatarUrl\n  bioHTML\n  followers {\n    totalCount\n  }\n  following {\n    totalCount\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'cc354a0232e0875fe18b3a8436ec165f';
export default node;
