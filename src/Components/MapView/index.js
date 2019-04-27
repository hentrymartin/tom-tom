import React from 'react';
import {Images} from '../../Images';
import './MapView.scss';
import Incident from '../Incident';

const MapView = props => {
  return (
    <div className="map-view-wrapper">
      <img src={Images.MAP_IMAGE} alt="fake map" />
      <div className="incidents-board">
        {props.roadIncidents.map((incident, index) => (
          <Incident key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};

MapView.defaultProps = {
  roadIncidents: [],
};

export default MapView;
