import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import {
  AppUserQuery,
  AppUserQueryResponse,
} from './__generated__/AppUserQuery.graphql';
import environment from './environment';
import User from './User';

const App: React.FC = () => {
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
        login: process.env.LOGIN_NAME,
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
            <div className="fixed w-screen h-screen bg-blue-50 flex items-center justify-center">
              <p>loading...</p>
            </div>
          );
        }

        return <User user={props.user} />;
      }}
    />
  );
};

export default App;
