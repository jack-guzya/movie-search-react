import React from 'react';
// Components
import Header from '../Header';
import Loader from '../Loader';
import SearchInfo from '../SearchInfo';
import MovieList from '../MovieList';
import Paginator from '../Paginator';
// Style
import s from './App.module.css';

const App = () => (
  <>
    <header className={s.header}>
      <Header />
      <div className={s.loader}>
        <Loader />
      </div>
    </header>

    <main className={s.main}>
      <SearchInfo />
      <MovieList />
      <Paginator />
    </main>
  </>
);

export default App;
