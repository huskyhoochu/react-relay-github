import React, { useContext, useEffect } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { useParams } from 'react-router-dom';

import {
  AppUserQuery,
  AppUserQueryResponse,
} from './__generated__/AppUserQuery.graphql';
import { ThemeContext } from './context/themeContext';
import environment from './environment';
import User from './User';
import Loading from './Loading';
import Error from './Error';

const App: React.FC = () => {
  const { useDarkModeProps } = useContext(ThemeContext);
  const { login } = useParams<{ login: string }>();

  useEffect(() => {
    useDarkModeProps.initTheme();
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
          return <Error message={error.message} />;
        }

        if (!props) {
          return <Loading />;
        }

        if (!props.user) {
          return <div>검색결과가 없습니다.</div>;
        }

        return <User user={props.user} />;
      }}
    />
  );
};

export default App;
