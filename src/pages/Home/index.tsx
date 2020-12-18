import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import MovieList from 'components/MovieList';
// services
import { getAllMovies } from 'utils/requests';
// context
import { useMovieContext } from 'context/movieContext';
// models
import { MovieDiscoverModel } from 'models/movie.discover';
// styles
import { useStyles } from './styles';

enum Status {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

const Home: React.FC = () => {
  const classes = useStyles();
  const [status, setStatus] = useState(Status.idle);
  const { word, movies, updateMovies, rate, setRateFilter } = useMovieContext();

  useEffect(() => {
    const loadData = () => {
      setStatus(Status.pending);
      getAllMovies()
        .then((results: MovieDiscoverModel[]) => {
          setStatus(Status.resolved);
          updateMovies(setRateFilter(results, rate));
        })
        .catch(() => {
          setStatus(Status.rejected);
          updateMovies(setRateFilter([], rate));
        });
    };

    try {
      if (word.length === 0) {
        loadData();
      }
    } catch (error) {}
  }, [word.length, rate]);

  return (
    <div className="home">
      <Grid container>
        <Grid item>
          <Typography variant="h5" className={classes.title}>
            🔥 Popular Movies
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.homelist}>
        {(status === Status.idle || status === Status.pending) && (
          <>
            {Array(2)
              .fill('')
              .map((_, i) => (
                <Grid item key={i}>
                  <Box width={500} marginRight={0.5} my={5}>
                    <Grid item>
                      <Skeleton variant="rect" width={500} height={180} />
                      <Box pt={0.5}>
                        <Skeleton />
                        <Skeleton width="60%" />
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              ))}
          </>
        )}
        {movies && movies.length > 0 && (
          <Grid item>
            <MovieList movieList={movies} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Home;
