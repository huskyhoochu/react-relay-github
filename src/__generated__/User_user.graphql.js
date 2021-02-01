/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_user$ref: FragmentReference;
declare export opaque type User_user$fragmentType: User_user$ref;
export type User_user = {|
  +name: ?string,
  +$refType: User_user$ref,
|};
export type User_user$data = User_user;
export type User_user$key = {
  +$data?: User_user$data,
  +$fragmentRefs: User_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
};
// prettier-ignore
(node/*: any*/).hash = 'bb619cae48870ab9ff47501f560dfd65';

module.exports = node;
