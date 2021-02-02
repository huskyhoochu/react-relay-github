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
  createdAt
  email
  followers {
    totalCount
  }
  following {
    totalCount
  }
  websiteUrl
  url
  repositories(last: 10, isFork: false, orderBy: {field: STARGAZERS, direction: ASC}) {
    totalCount
    nodes {
      name
      stargazerCount
      createdAt
      id
    }
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
    ], v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any), v3 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
    } as any), v4 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalCount",
        "storageKey": null
    } as any), v5 = [
        (v4 /*: any*/)
    ], v6 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any);
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
                        (v2 /*: any*/),
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
                        (v3 /*: any*/),
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
                            "selections": (v5 /*: any*/),
                            "storageKey": null
                        },
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "FollowingConnection",
                            "kind": "LinkedField",
                            "name": "following",
                            "plural": false,
                            "selections": (v5 /*: any*/),
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
                                (v4 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Repository",
                                    "kind": "LinkedField",
                                    "name": "nodes",
                                    "plural": true,
                                    "selections": [
                                        (v2 /*: any*/),
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "stargazerCount",
                                            "storageKey": null
                                        },
                                        (v3 /*: any*/),
                                        (v6 /*: any*/)
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": "repositories(isFork:false,last:10,orderBy:{\"direction\":\"ASC\",\"field\":\"STARGAZERS\"})"
                        },
                        (v6 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "d66d7aaa23a116b5fdbcbf7906c7944b",
            "id": null,
            "metadata": {},
            "name": "AppUserQuery",
            "operationKind": "query",
            "text": "query AppUserQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  name\n  avatarUrl\n  bioHTML\n  createdAt\n  email\n  followers {\n    totalCount\n  }\n  following {\n    totalCount\n  }\n  websiteUrl\n  url\n  repositories(last: 10, isFork: false, orderBy: {field: STARGAZERS, direction: ASC}) {\n    totalCount\n    nodes {\n      name\n      stargazerCount\n      createdAt\n      id\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'cc354a0232e0875fe18b3a8436ec165f';
export default node;
