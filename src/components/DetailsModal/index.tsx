import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Material UI
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// Components
import PosterComponent from '../common/Poster';
import Details from '../common/Details';
// Reducer
import { selectors, actions } from '../../reducers/movie';
// Styles
import s from './Details.module.css';

const DetailsModal = () => {
  const isOpen = useSelector(selectors.getDetailsStatus);
  const details = useSelector(selectors.getMovieDetails);
  const dispatch = useDispatch();

  if (!details) {
    return null;
  }

  const handleClose = () => {
    dispatch(actions.setDetails({ isOpen: false }));
  };

  const { Type, Year, Country, Genre, Director, Rated, Poster, Title, imdbRating, Plot } = details;

  return (
    <Dialog className={s.container} onClose={handleClose} open={isOpen}>
      <div className={s.header}>
        <h2 className={s.title}>{Title}</h2>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent dividers>
        <PosterComponent className={s.poster} url={Poster} title={Title} />
        <Details
          list={[
            ['Type', Type],
            ['Year', Year],
            ['Country', Country],
            ['Genre', Genre],
            ['Director', Director],
            ['Rated', Rated],
            ['Imdb', imdbRating],
            ['Plot', Plot],
          ]}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
