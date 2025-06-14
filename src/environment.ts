import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from 'relay-runtime';
import 'isomorphic-fetch';

function fetchQuery(operation: RequestParameters, variables: Variables) {
  console.log(process.env);

  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
