import React from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, Link } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// services
import { imgUrl } from 'services/api';
// model
import { MovieDiscoverModel } from 'models/movie.discover';
// styles
import { useStyles } from './styles';

interface MovieListProps {
  movieList: MovieDiscoverModel[];
}

const MovieList: React.FC<MovieListProps> = ({ movieList }: MovieListProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {movieList.map(movie => (
          <GridListTile key={`grid-${movie.id}`}>
            <Link href={`/${movie.id}`}>
              {movie.backdrop_path && <img src={`${imgUrl}/w500/${movie.backdrop_path}`} alt={movie.original_title} />}
              <GridListTileBar
                title={movie.title}
                actionIcon={
                  <IconButton aria-label={`star ${movie.title}`} className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default MovieList;
