import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      fontWeight: 'bold',
      color: '#333',
    },
    span: {
      fontWeight: 'bold',
    },
    cardMediaImage: {
      width: '100%',
    },
    backButton: {
      margin: '24px 0',
    },
  }),
);
