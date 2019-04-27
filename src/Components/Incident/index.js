import React from 'react';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import {MAGNITUDE_MAP} from '../../Constants/IncidentsConstants';
import './Incident.scss';

const Incident = (props) => {
  const {incident} = props;
  const {point, magnitude, id} = incident;

  // This adds the incident on the map
  const style = {
    top: `${point.y}px`,
    left: `${point.x}px`,
  };

  const severity = MAGNITUDE_MAP[magnitude];

  const goToDetailedView = () => {
    props.history.push(`/incident/${id}`)
  };

  return (
    <div
      className={classnames('incident-wrapper', severity.toLowerCase())}
      style={style}
      onClick={goToDetailedView}>
      <span className="severity-label">{severity}</span>
    </div>
  )
};

Incident.defaultProps = {
  incident: {},
};

export default withRouter(Incident);