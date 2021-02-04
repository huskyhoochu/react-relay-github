import React, { useState } from 'react';
import { fetchQuery, graphql } from 'relay-runtime';

import {
  useSearchFormSearchUserQuery,
  useSearchFormSearchUserQueryResponse,
} from './__generated__/useSearchFormSearchUserQuery.graphql';
import environment from '../environment';

const useSearchForm = () => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [
    searchList,
    setSearchList,
  ] = useState<useSearchFormSearchUserQueryResponse>(undefined);

  const query = graphql`
    query useSearchFormSearchUserQuery($login: String!) {
      search(query: $login, type: USER, first: 10) {
        edges {
          node {
            ... on User {
              id
              login
            }
          }
        }
      }
    }
  `;

  const searchUser = (user: string) => {
    fetchQuery<useSearchFormSearchUserQuery>(environment, query, {
      login: user,
    }).then((data) => setSearchList(data));
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setError('');
    setUsername(e.currentTarget.value);
  };

  const validate = () => {
    if (!username) {
      setError('이름을 입력하세요');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setSearchList(null);

    if (validate()) {
      window.location.assign(`/${username}`);
    }
  };

  return {
    username,
    error,
    searchList,
    searchUser,
    handleChange,
    handleSubmit,
  };
};

export type useSearchFormProps = ReturnType<typeof useSearchForm>;

export default useSearchForm;
