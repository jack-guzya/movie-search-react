import React from 'react';
// Components
import Header from '../Header';
import Loader from '../Loader';
import SearchInfo from '../SearchInfo';
import MovieList from '../MovieList';
import Details from '../DetailsModal';
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
      <SearchInfo />
    </header>

    <main className={s.main}>
      <MovieList />
      <Details />
      <Paginator />
    </main>
  </>
);

export default App;
