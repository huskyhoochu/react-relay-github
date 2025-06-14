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

  const colorKeyword = (keyword: string) => {
    return keyword
      ? keyword.replace(
        new RegExp(searchProps.username, 'gi'),
        `<span class="text-red-400">${searchProps.username}</span>`,
      )
      : '';
  };

  const TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

  return (
    <div className="home">
      <div className="search-form">
        <FontAwesomeIcon icon={faGithub} className="search-form__github" />
        <p>검색하려는 Github 유저를 입력하세요.</p>
        <p style={{ textAlign: 'center' }}>TOKEN: {TOKEN}</p>
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
          <div className="search-form__list">
            {searchProps.searchList &&
              Array.prototype.map.call(
                searchProps.searchList.search.edges.slice(0),
                (item: {
                  readonly node: {
                    readonly id?: string;
                    readonly login?: string;
                  } | null;
                }) => (
                  <button
                    type="button"
                    value={item.node.login}
                    onClick={searchProps.selectKeyword}
                    className="search-form__list__item"
                    key={item.node.id}
                  >
                    <p
                      dangerouslySetInnerHTML={{
                        __html: colorKeyword(item.node.login) as string,
                      }}
                    />
                  </button>
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
