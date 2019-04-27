import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { MAGNITUDE_MAP } from '../../Constants/IncidentsConstants';
import IncidentRoute from '../IncidentRoute';
import './IncidentRow.scss';

const IncidentRow = props => {
  const { incident } = props;
  const { magnitude, from, to, id } = incident;
  const severity = MAGNITUDE_MAP[magnitude];

  const goToDetailedView = () => {
    props.history.push(`/incident/${id}`)
  };

  return (
    <li className="incident-row" onClick={goToDetailedView}>
      <div className="incident-row__info-wrapper">
        <div className="incident-row__info-wrapper__details">
          <h4>{incident.details}</h4>
        </div>
        <IncidentRoute from={from} to={to} />
      </div>

      <div className={classnames('incident-row__severity', severity.toLowerCase())} />
    </li>
  );
};

IncidentRow.defaultProps = {
  incident: {},
};

export default withRouter(IncidentRow);
