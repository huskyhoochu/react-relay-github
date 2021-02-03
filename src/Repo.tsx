import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { User_user } from './__generated__/User_user.graphql';

const Repo: React.FC<{ user: User_user }> = ({ user }) => {
  const addClass = (e: React.BaseSyntheticEvent) => {
    e.currentTarget.classList.add('animate__animated', 'animate__headShake');
  };

  const removeClass = (e: React.BaseSyntheticEvent) => {
    e.currentTarget.classList.remove('animate__animated', 'animate__headShake');
  };

  return (
    <div className="profile">
      <div className="profile__section">
        <p className="profile__title">Repositories</p>
        {Array.prototype.map.call(
          user.repositories.nodes,
          (item: {
            readonly id: string;
            readonly name: string;
            readonly descriptionHTML: unknown;
            readonly stargazerCount: number;
            readonly createdAt: unknown;
          }) => (
            <div key={item.id} className="profile__repo">
              <div className="profile__repo__name">
                <span className="name">{item.name}</span>
                <span onMouseEnter={addClass} onMouseLeave={removeClass}>
                  <FontAwesomeIcon icon={faStar} />
                  &nbsp;{item.stargazerCount}
                </span>
              </div>
              <p className="profile__repo__description">
                {format(parseISO(item.createdAt as string), 'yyyy.MM.dd')}
              </p>
              <div
                className="profile__repo__description"
                dangerouslySetInnerHTML={{
                  __html: item.descriptionHTML as string,
                }}
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Repo;
