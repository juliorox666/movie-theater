import React from 'react';
import { Container } from '@material-ui/core';
// styles
import { useStyles } from './styles';

const AppContent: React.FC = ({ children }: { children?: React.ReactNode }) => {
  const classes = useStyles();

  return <div className={classes.appcontent}>{children && <Container>{children}</Container>}</div>;
};

export default AppContent;
