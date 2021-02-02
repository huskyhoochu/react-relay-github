import React from 'react';
import './Index.scss';
import { createFragmentContainer, graphql } from 'react-relay';
import { User_user } from './__generated__/User_user.graphql';

import './User.scss';

const User: React.FC<{ user: User_user }> = (props: { user: User_user }) => {
  const { user } = props;
  console.log(user);
  return (
    <div className="user">
      <div className="user__body">
        <img className="user__body__avatar" src={user.avatarUrl as string} alt={user.name} />
        <p className="user__body__name">{user.login}</p>
        <div className="user__body__section">
          <p className="user__body__title">Name</p>
          <p>{user.name}</p>
        </div>
        <div className="user__body__section">
          <p className="user__body__title">Bio</p>
          <div className="user__body__bio" dangerouslySetInnerHTML={{ __html: user.bioHTML as string }}/>
        </div>
        <div className="user__body__section">
          <p className="user__body__title">Email</p>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <div className="user__body__section">
          <p className="user__body__title">Github url</p>
          <a href={user.url as string} target="_blank" rel="noopener noreferrer">{user.url}</a>
        </div>
        <div className="user__body__section">
          <p className="user__body__title">Website</p>
          <a href={user.websiteUrl as string} target="_blank" rel="noopener noreferrer">{user.websiteUrl}</a>
        </div>
        <div className="user__body__section flex items-center justify-between">
          <div>
            <p className="user__body__title">팔로워</p>
            <p>{user.followers.totalCount}명</p>
          </div>
          <div>
            <p className="user__body__title">팔로잉</p>
            <p>{user.following.totalCount}명</p>
          </div>
        </div>
      </div>
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
      repositories(last: 10, isFork: false, orderBy: { field: STARGAZERS, direction: ASC }) {
          totalCount
          nodes {
              name
              stargazerCount
              createdAt
          }
      }  
    }
  `,
});
