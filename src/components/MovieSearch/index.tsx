import React, { useEffect } from 'react';
import { Paper, InputBase, IconButton, Typography } from '@material-ui/core';
import MovieRating from 'components/MovieRating';
import SearchIcon from '@material-ui/icons/Search';
// services
import { searchMovies } from 'utils/requests';
// styles
import { useStyles } from './styles';
import { useMovieContext } from 'context/movieContext';

const MovieSearch: React.FC = () => {
  const classes = useStyles();

  const { word, movies, updateWord, updateMovies, rate, setRateFilter } = useMovieContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const value = event.target.value;
    updateWord(value);
  };

  const handleRatingChange = (value: number | null) => {
    setRateFilter(movies, value);
  };

  useEffect(() => {
    const loadSearch = async (): Promise<any> => {
      const results = await searchMovies({ word });
      updateMovies(setRateFilter(results, rate));
    };

    if ((word.length > 0 && rate) || word.length > 0) {
      loadSearch();
    } else if (rate) {
      updateMovies(setRateFilter(movies, rate));
    }
  }, [word, word.length, rate]);

  return (
    <div className={classes.moviesearch}>
      <Paper component="form" className={classes.root}>
        <InputBase
          value={word}
          className={classes.input}
          placeholder="Search for a movie"
          inputProps={{ 'aria-label': 'search for a movie' }}
          onChange={handleChange}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className={classes.ratingBox}>
        <Typography variant="h6" gutterBottom style={{ marginBottom: 0, marginRight: 12 }}>
          Rating
        </Typography>
        <MovieRating value={rate} setValue={handleRatingChange} />
      </div>
    </div>
  );
};

export default MovieSearch;
