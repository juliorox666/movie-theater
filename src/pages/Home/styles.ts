import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    home: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: theme.palette.background.paper,
    },
    homelist: {
      display: 'block',
    },
    title: {
      fontWeight: 'bold',
      color: '#333',
      margin: '24px 0',
      background: '#ddd',
      padding: 12,
      borderRadius: 8,
    },
  }),
);
