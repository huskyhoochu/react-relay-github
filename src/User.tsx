import React from 'react';
import './Index.scss';
import { createFragmentContainer, graphql } from 'react-relay';
import { User_user } from './__generated__/User_user.graphql';

const User: React.FC<{ user: User_user }> = (props: { user: User_user }) => {
  const { user } = props;

  return (
    <div className="inline-block">
      <p className="text-2xl">{user.name}</p>
    </div>
  );
};

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      name
    }
  `,
});
