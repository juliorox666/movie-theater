import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppHeader from 'components/AppHeader';
import AppContent from 'components/AppContent';
import Home from 'pages/Home';
import Details from 'pages/Details';

const Content: React.FC = () => {
  return (
    <div className="appcontent">
      <AppHeader />
      <AppContent>
        <Switch>
          <Route exact path={`/`} component={Home} />
          <Route exact path={`/:id`} component={Details} />
        </Switch>
      </AppContent>
    </div>
  );
};

export default Content;
