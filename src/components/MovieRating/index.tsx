import React from 'react';
import Rating from '@material-ui/lab/Rating';
// styles
import { useStyles } from './styles';

interface MovieRatingProps {
  value: number | null;
  setValue(value: number | null): void;
}

const MovieRating: React.FC<MovieRatingProps> = ({ value, setValue }: MovieRatingProps) => {
  const classes = useStyles();

  return (
    <div className={classes.movierating}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default MovieRating;
