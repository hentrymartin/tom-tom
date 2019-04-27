import React from 'react';
import IncidentRow from '../IncidentRow';
import './ListView.scss';

const ListView = props => {
  return (
    <div className="list-view-wrapper">
      <ul>
        {props.roadIncidents.map(incident => (
          <IncidentRow key={incident.id} incident={incident} />
        ))}
      </ul>
    </div>
  );
};

ListView.defaultProps = {
  roadIncidents: [],
};

export default ListView;
