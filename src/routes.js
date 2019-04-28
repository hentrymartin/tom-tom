import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import IncidentDetailedView from './Containers/IncidentDetailedViewContainer';
import HomeView from './Components/HomeView';
import IncidentsWrapperContainer from './Containers/IncidentsWrapperContainer';

const Routes = () => (
  <>
    <Router>
      <Route path="/" exact={true} render={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomeView} />
      <Route path="/incidents" component={IncidentsWrapperContainer} />
      <Route path="/incident/:id" component={IncidentDetailedView} />
    </Router>
  </>
);

export default Routes;
