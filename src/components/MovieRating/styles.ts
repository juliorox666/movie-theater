import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    movierating: {
      backgroundColor: `#ddd`,
      alignItems: 'center',
      display: 'flex',
      borderRadius: 4,
    },
  }),
);
