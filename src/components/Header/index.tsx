import React from 'react';
import { Input } from '@material-ui/core';
// Components
import SingIn from './SignIn';
// Styles
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Movie Catalog</h1>
      <Input defaultValue="Enter a movie name" />
      <SingIn />
    </header>
  );
};

export default Header;
