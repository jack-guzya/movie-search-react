import React from 'react';
import { useSelector } from 'react-redux';
// Material UI
import LinearProgress from '@material-ui/core/LinearProgress';
// Reducer
import { selectors } from '../../reducers/movie';

export default function LinearIndeterminate() {
  const isLoading = useSelector(selectors.getLoadingStatus);

  return isLoading ? <LinearProgress /> : null;
}
