import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appcontent: {
      maxWidth: 1200,
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      fontWeight: 'bold',
      color: '#333',
    },
  }),
);
