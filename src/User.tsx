import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Helmet } from 'react-helmet';

import { User_user } from './__generated__/User_user.graphql';
import './User.scss';
import ToggleDark from './ToggleDark';
import Profile from './profile';
import Repo from './Repo';

const User: React.FC<{
  user: User_user;
  theme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}> = ({ user, theme, setTheme }) => {
  return (
    <div className="user">
      <Helmet>
        <link
          id="favicon"
          rel="shortcut icon"
          type="image/png"
          href={user.avatarUrl as string}
        />
        <title>{`${user.login} | Github Profile`}</title>
      </Helmet>
      <Profile user={user} />
      <Repo user={user} />
      <ToggleDark theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      name
      avatarUrl
      bioHTML
      createdAt
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
      login
      websiteUrl
      url
      repositories(
        first: 6
        isFork: false
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        nodes {
          id
          name
          descriptionHTML
          stargazerCount
          createdAt
          url
        }
      }
    }
  `,
});
