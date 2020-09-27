import React from 'react';
// Components
import Header from '../Header';
import SearchInfo from '../SearchInfo';
import MovieList from '../MovieList';
import Paginator from '../Paginator';
// Style
import s from './App.module.css';

const App = () => (
  <div>
    <Header />
    <main className={s.main}>
      <SearchInfo />
      <MovieList />
      <Paginator />
    </main>
  </div>
);

export default App;
