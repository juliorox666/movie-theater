import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Details from 'pages/Details';

const Content: React.FC = () => {
  return (
    <div className="appcontent">
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/:id`} component={Details} />
      </Switch>
    </div>
  );
};

export default Content;
