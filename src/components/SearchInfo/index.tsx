import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../../reducers/movie';

const SearchInfo = () => {
  const message = useSelector(selectors.getMessage);

  return <div>{message}</div>;
};

export default SearchInfo;
