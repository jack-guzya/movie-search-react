import React from 'react';
import { TextField } from '@material-ui/core';
// Components
import SingIn from './SignIn';
// Styles
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Movie Catalog</h1>
      <SingIn />
      <TextField label="Movie name" />
    </header>
  );
};

export default Header;
