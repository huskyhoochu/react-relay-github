import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import 'isomorphic-fetch';

function fetchQuery(
  operation,
  variables,
) {
  return fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;