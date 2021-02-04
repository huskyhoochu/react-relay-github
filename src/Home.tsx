import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ThemeContext } from './context/themeContext';
import ToggleDark from './ToggleDark';
import useSearchForm from './hook/useSearchForm';
import './Home.scss';

const Home: React.FC = () => {
  const { useDarkModeProps } = useContext(ThemeContext);
  const searchProps = useSearchForm();

  useEffect(() => {
    useDarkModeProps.initTheme();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      searchProps.searchUser(searchProps.username);
    }, 100);

    return () => {
      clearTimeout(handler);
    };
  }, [searchProps.username]);

  return (
    <div className="home">
      <div className="search-form">
        <FontAwesomeIcon icon={faGithub} className="search-form__github" />
        <p>검색하려는 Github 유저를 입력하세요.</p>
        <form onSubmit={searchProps.handleSubmit}>
          <label htmlFor="username" className="search-form__input">
            <input
              id="username"
              type="text"
              onChange={searchProps.handleChange}
              value={searchProps.username}
              autoComplete="off"
              autoCapitalize="off"
            />
            <p className="search-form__input__error">{searchProps.error}</p>
          </label>
          <div>
            {!searchProps.searchList && (
              <div>
                <p>loading...</p>
              </div>
            )}
            {searchProps.searchList &&
              Array.prototype.map.call(
                searchProps.searchList.search.edges.slice(0),
                (item: {
                  readonly node: {
                    readonly id?: string;
                    readonly login?: string;
                  } | null;
                }) => (
                  <div key={item.node.id}>
                    <p>{item.node.login}</p>
                  </div>
                ),
              )}
          </div>
          <button type="submit" className="search-form__submit">
            검색하기
          </button>
        </form>
      </div>
      <ToggleDark />
    </div>
  );
};

export default Home;
