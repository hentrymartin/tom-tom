import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ListView from './Containers/ListViewContainer';
import MapView from './Containers/MapViewContainer';
import IncidentDetailedView from './Containers/IncidentDetailedViewContainer';
import HomeView from './Components/HomeView';

const Routes = () => (
  <>
    <Router>
      <Route path="/" exact={true} render={() => <Redirect to="/home" />} />
      <Route path="/home" component={HomeView} />
      <Route path="/list" component={ListView} />
      <Route path="/map" component={MapView} />
      <Route path="/incident/:id" component={IncidentDetailedView} />
    </Router>
  </>
);

export default Routes;
