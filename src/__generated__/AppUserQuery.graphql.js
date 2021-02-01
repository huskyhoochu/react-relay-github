/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type User_user$ref = any;
export type AppUserQueryVariables = {|
  login: string
|};
export type AppUserQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: User_user$ref
  |}
|};
export type AppUserQuery = {|
  variables: AppUserQueryVariables,
  response: AppUserQueryResponse,
|};
*/


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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a3f50402f19ad6403371471b2f46e725",
    "id": null,
    "metadata": {},
    "name": "AppUserQuery",
    "operationKind": "query",
    "text": "query AppUserQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc354a0232e0875fe18b3a8436ec165f';

module.exports = node;
