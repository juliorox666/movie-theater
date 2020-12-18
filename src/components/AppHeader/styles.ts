import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBackgroundImage from 'assets/bg.jpg';

export const useStyles = makeStyles(() =>
  createStyles({
    appheader: {
      paddingTop: 24,
      flexGrow: 1,
      width: `100%`,
      padding: '24px 0',
      backgroundImage: `url(${AppBackgroundImage})`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      backgroundColor: `#000`,
      backgroundPosition: `center`,
      color: `#fff`,
    },
    appheadercontainer: {
      maxWidth: `1200px !important`,
    },
    containerSearchRating: {
      marginTop: 12,
      alignItems: 'center',
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      WebkitFontSmoothing: `antialiased`,
      textShadow: `1px 1px 1px rgb(137 143 160)`,
    },
  }),
);
