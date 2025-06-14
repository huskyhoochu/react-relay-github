/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useSearchFormSearchUserQueryVariables = {
    login: string;
};
export type useSearchFormSearchUserQueryResponse = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id?: string;
                readonly login?: string;
            } | null;
        } | null> | null;
    };
};
export type useSearchFormSearchUserQuery = {
    readonly response: useSearchFormSearchUserQueryResponse;
    readonly variables: useSearchFormSearchUserQueryVariables;
};



/*
query useSearchFormSearchUserQuery(
  $login: String!
) {
  search(query: $login, type: USER, first: 10) {
    edges {
      node {
        __typename
        ... on User {
          id
          login
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
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
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any),
        ({
            "kind": "Variable",
            "name": "query",
            "variableName": "login"
        } as any),
        ({
            "kind": "Literal",
            "name": "type",
            "value": "USER"
        } as any)
    ], v2 = ({
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any), v3 = ({
        "kind": "InlineFragment",
        "selections": [
            (v2 /*: any*/),
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "login",
                "storageKey": null
            }
        ],
        "type": "User",
        "abstractKey": null
    } as any);
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "useSearchFormSearchUserQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SearchResultItemConnection",
                    "kind": "LinkedField",
                    "name": "search",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "SearchResultItemEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                        (v3 /*: any*/)
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
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
            "name": "useSearchFormSearchUserQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "SearchResultItemConnection",
                    "kind": "LinkedField",
                    "name": "search",
                    "plural": false,
                    "selections": [
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "SearchResultItemEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": null,
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "__typename",
                                            "storageKey": null
                                        },
                                        (v3 /*: any*/),
                                        {
                                            "kind": "InlineFragment",
                                            "selections": [
                                                (v2 /*: any*/)
                                            ],
                                            "type": "Node",
                                            "abstractKey": "__isNode"
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        }
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "d02975b86f15e803ec4cef4a2e763e80",
            "id": null,
            "metadata": {},
            "name": "useSearchFormSearchUserQuery",
            "operationKind": "query",
            "text": "query useSearchFormSearchUserQuery(\n  $login: String!\n) {\n  search(query: $login, type: USER, first: 10) {\n    edges {\n      node {\n        __typename\n        ... on User {\n          id\n          login\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '6506f588a4c537429a916cbbf7eaa5c5';
export default node;
