import React, { useEffect, useState } from 'react';
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
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    }
  }, []);

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
          return <Loading />;
        }

        return <User user={props.user} theme={theme} setTheme={setTheme} />;
      }}
    />
  );
};

export default App;
