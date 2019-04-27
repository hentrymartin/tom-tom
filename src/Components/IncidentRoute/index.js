import React from 'react';
import './IncidentRoute.scss';

const IncidentRoute = ({ from, to }) => (
  <div className="route-affected">
    <div className="route-affected__from">{from}</div>
    <div className="route-affected__line" />
    <div className="route-affected__to">{to}</div>
  </div>
);

IncidentRoute.defaultProps = {
  from: '',
  to: '',
};

export default IncidentRoute;
