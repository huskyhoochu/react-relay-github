import React from 'react';
import numeral from 'numeral';

import { User_user } from './__generated__/User_user.graphql';
import './Profile.scss';

const Profile: React.FC<{ user: User_user }> = ({ user }) => {
  return (
    <div className="profile">
      <img
        className="profile__avatar"
        src={user.avatarUrl as string}
        alt={user.name}
      />
      <p className="profile__name">{user.login}</p>
      <div className="profile__section">
        <p className="profile__title">Name</p>
        <p>{user.name}</p>
      </div>
      <div className="profile__section">
        <p className="profile__title">Bio</p>
        <div
          className="profile__bio"
          dangerouslySetInnerHTML={{ __html: user.bioHTML as string }}
        />
      </div>
      <div className="profile__section">
        <p className="profile__title">Email</p>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <div className="profile__section">
        <p className="profile__title">Github url</p>
        <a href={user.url as string} target="_blank" rel="noopener noreferrer">
          {user.url}
        </a>
      </div>
      <div className="profile__section">
        <p className="profile__title">Website</p>
        <a
          href={user.websiteUrl as string}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.websiteUrl}
        </a>
      </div>
      <div className="profile__section flex items-center justify-between">
        <div>
          <p className="profile__title">Followers</p>
          <p>{numeral(user.followers.totalCount).format()}</p>
        </div>
        <div>
          <p className="profile__title">Following</p>
          <p>{numeral(user.following.totalCount).format()}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
