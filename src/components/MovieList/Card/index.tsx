import React from 'react';
import { useDispatch } from 'react-redux';
// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// Components
import Poster from '../../common/Poster';
import Details from '../../common/Details';
// Reducer
import { actions, operations } from '../../../reducers/movie';
// Style
import s from './Card.module.css';

type TProps = {
  title: string;
  year: string;
  imdb: string;
  type: string;
  media: string;
};

const MovieCard: React.FC<TProps> = ({ title, year, imdb, type, media }) => {
  const dispatch = useDispatch();

  const showDetails = () => {
    dispatch(operations.showDetails(imdb));
  };

  return (
    <Card className={s.card} variant="outlined">
      <CardActionArea href={`https://www.imdb.com/title/${imdb}/videogallery`} target="_blank">
        <Poster url={media} title={title} />
        <CardContent>
          <h2 className={s.title}>{title}</h2>
          <Details
            list={[
              ['Year', year],
              ['Imdb ID', imdb],
              ['Type', type],
            ]}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={showDetails}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
