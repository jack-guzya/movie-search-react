import React from 'react';
// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// Components
import Poster from '../Poster';
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
  return (
    <Card className={s.card} variant="outlined">
      <CardActionArea href={`https://www.imdb.com/title/${imdb}/videogallery`} target="_blank">
        <Poster url={media} title={title} />
        <CardContent>
          <h2 className={s.title}>{title}</h2>
          <h3>
            <span className={s.heading}>Year: </span>
            {year}
          </h3>
          <h3>
            <span className={s.heading}>Imdb ID: </span>
            {imdb}
          </h3>
          <h3>
            <span className={s.heading}>Type: </span>
            {type}
          </h3>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
