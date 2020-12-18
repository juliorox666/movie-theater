import React, { useEffect, useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { imgUrl } from 'services/api';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Skeleton from '@material-ui/lab/Skeleton';
// services
import { findMovie } from 'utils/requests';
// context
import { useMovieContext } from 'context/movieContext';
// styles
import { useStyles } from './styles';
import { ResponseFindMovieModel } from 'models/movie.discover';

interface ParamsTypes {
  id: string;
}

const Details: React.FC = () => {
  const { id } = useParams<ParamsTypes>();

  const classes = useStyles();
  const [movieDetail, setMovieDetail] = useState<ResponseFindMovieModel | null>(null);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const response = await findMovie({ id });
      setMovieDetail(response);
    };

    try {
      loadData();
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  return (
    <div className="details">
      <Button
        href="/"
        className={classes.backButton}
        variant="contained"
        color="secondary"
        startIcon={<KeyboardBackspaceIcon />}
      >
        Back
      </Button>
      {movieDetail && (
        <Card>
          {movieDetail.backdrop_path && (
            <CardMedia>
              <img
                className={classes.cardMediaImage}
                src={`${imgUrl}/w500/${movieDetail.backdrop_path}`}
                alt={movieDetail.original_title}
              />
            </CardMedia>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movieDetail.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {movieDetail.tagline}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              <span>Description</span>: {movieDetail.overview}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              <span>Budget</span>: {movieDetail.budget}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              <span>Popularity</span>: {movieDetail.popularity}
            </Typography>
            {movieDetail.homepage && (
              <Typography variant="h6" color="textSecondary">
                <span>Homepage</span>:{' '}
                <a href={movieDetail.homepage} rel="noreferrer" target="_blank">
                  {movieDetail.homepage}
                </a>
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Details;
