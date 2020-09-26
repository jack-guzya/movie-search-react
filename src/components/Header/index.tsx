import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
// Components
import SingIn from './SignIn';
// Styles
import s from './Header.module.css';

const Header = () => {
  const [movieName, setMovieName] = useState('batman');

  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMovieName(e.currentTarget.value);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.titleContainer}>
          <h1>Movie Catalog</h1>
        </div>

        <div className={s.signIn}>
          <SingIn />
        </div>

        <div className={s.searchField}>
          <TextField label="Movie name" onChange={handleSearch} value={movieName} />
        </div>
      </div>
    </header>
  );
};

export default Header;
