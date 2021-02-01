import React from 'react';
import './App.scss';
import { createFragmentContainer, graphql } from "react-relay";


const User = (props) => {
  const { user } = props;

  return (
    <div className="inline-block">
      <p className="text-2xl">{user.name}</p>
    </div>
  )

}


export default createFragmentContainer(User, {
  user: graphql`
      fragment User_user on User {
          name
      }
  `
});
