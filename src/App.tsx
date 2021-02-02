import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { useParams } from 'react-router-dom';

import {
  AppUserQuery,
  AppUserQueryResponse,
} from './__generated__/AppUserQuery.graphql';
import environment from './environment';
import User from './User';
import Loading from './Loading';

const App: React.FC = () => {
  const { login } = useParams<{ login: string }>();

  return (
    <QueryRenderer<AppUserQuery>
      environment={environment}
      query={graphql`
        query AppUserQuery($login: String!) {
          user(login: $login) {
            ...User_user
          }
        }
      `}
      variables={{
        login,
      }}
      render={({
        error,
        props,
      }: {
        error: Error | null;
        props: AppUserQueryResponse;
      }) => {
        if (error) {
          return <div>Error!</div>;
        }

        if (!props) {
          return (
            <Loading />
          );
        }

        return <User user={props.user} />;
      }}
    />
  );
};

export default App;
