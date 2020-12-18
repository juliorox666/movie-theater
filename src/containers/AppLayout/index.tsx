import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from 'components/AppHeader';
import AppContent from 'components/AppContent';
import Home from 'pages/Home';
import Details from 'pages/Details';
// styles
import { useStyles } from './styles';

const AppLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.applayout}>
      <AppHeader />
      <AppContent>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route path={`/:id`} component={Details} />
        </Switch>
      </AppContent>
    </div>
  );
};

export default AppLayout;
