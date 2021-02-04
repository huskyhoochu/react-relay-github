import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ThemeContext } from './context/themeContext';
import ToggleDark from './ToggleDark';
import './Home.scss';

const Home: React.FC = () => {
  const { useDarkModeProps } = useContext(ThemeContext);
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    useDarkModeProps.initTheme();
  }, []);

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

    if (validate()) {
      window.location.assign(`/${username}`);
    }
  };

  return (
    <div className="home">
      <div className="search-form">
        <FontAwesomeIcon icon={faGithub} className="search-form__github" />
        <p>검색하려는 Github 유저를 입력하세요.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="search-form__input">
            <input
              id="username"
              type="text"
              onChange={handleChange}
              value={username}
            />
            <p className="search-form__input__error">{error}</p>
          </label>
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
