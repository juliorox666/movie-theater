import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import MovieSearch from 'components/MovieSearch';
// styles
import { useStyles } from './styles';

const AppHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.appheader}>
      <Container className={classes.appheadercontainer}>
        <Grid container>
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              NetRockStar Movies
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.containerSearchRating}>
          <Grid item>
            <MovieSearch />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AppHeader;
