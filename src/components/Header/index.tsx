import React from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import * as movieReducer from '../../reducers/movie';
// Components
import SingIn from './SignIn';
// Styles
import s from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const debouncedDispatch = debounce(
    (currentName) => dispatch(movieReducer.operations.searchMovie(currentName)),
    2000
  );

  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const movieName = e.currentTarget.value;
    debouncedDispatch(movieName);
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.titleContainer}>
          <div className={s.logo} />
          <h1>Movie Catalog</h1>
        </div>

        <div className={s.signIn}>
          <SingIn />
        </div>

        <div className={s.searchField}>
          <TextField label="Movie name" onChange={handleSearch} />
        </div>
      </div>
    </>
  );
};

export default Header;
