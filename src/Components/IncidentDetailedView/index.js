import React, { useEffect } from 'react';
import classnames from 'classnames';
import IncidentRoute from '../IncidentRoute';
import { TYPE_MAP, TYPE_IMAGE_MAP } from '../../Constants/IncidentsConstants';
import { MAGNITUDE_MAP } from '../../Constants/IncidentsConstants';
import { Images } from '../../Images';
import './IncidentDetailedView.scss';

const IncidentDetailedView = props => {
  const { incident } = props;
  const { id } = props.match.params;
  const { from, to, type, delay, magnitude } = incident;
  const severity = MAGNITUDE_MAP[magnitude] || '';

  useEffect(() => {
    props.getIncidentById(id);
  }, []);

  return (
    <div className="incident-detailed-view">
      <h2>{incident.details}</h2>
      <div className="incident-detailed-view__info">
        <div className="incident-detailed-view__info__type">
          <img src={Images[TYPE_IMAGE_MAP[type]]} alt="Incident type icon" />
          <span>{TYPE_MAP[type]}</span>
        </div>

        <div className="incident-detailed-view__info__delay">
          <label>Delay</label>
          <span>{`${delay} minutes`}</span>
        </div>
      </div>
      <div className={classnames('incident-detailed-view__route-wrapper', severity.toLowerCase())}>
        <IncidentRoute from={from} to={to} />
      </div>
    </div>
  );
};

IncidentDetailedView.defaultProps = {
  incident: {},
};

export default IncidentDetailedView;
