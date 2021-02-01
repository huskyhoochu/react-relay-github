import React from 'react';
import './Index.scss';
import { createFragmentContainer, graphql } from 'react-relay';
import { User_user } from './__generated__/User_user.graphql';

import './User.scss';

const User: React.FC<{ user: User_user }> = (props: { user: User_user }) => {
  const { user } = props;

  return (
    <div className="user">
      <div className="user__body">
        <img className="user__body__avatar" src={user.avatarUrl as string} alt={user.name} />
        <p className="user__body__name">{user.name}</p>
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
      followers {
          totalCount
      }
      following {
          totalCount
      }
    }
  `,
});
