import React from 'react';
import { TextField } from '@material-ui/core';
// Components
import SingIn from './SignIn';
// Styles
import s from './Header.module.css';

const Header = () => {
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
          <TextField label="Movie name" />
        </div>
      </div>
    </header>
  );
};

export default Header;
