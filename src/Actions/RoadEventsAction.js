import Constants from '../Constants/Constants';

export const ROAD_INCIDENTS_RECEIVED = 'ROAD_INCIDENTS_RECEIVED';
export const ROAD_INCIDENT_RECEIVED_BY_ID = 'ROAD_INCIDENT_RECEIVED_BY_ID';

export function roadIncidentsReceived(roadIncidents) {
  return {
    type: ROAD_INCIDENTS_RECEIVED,
    roadIncidents,
  };
}

export function roadIncidentReceivedById(incident) {
  return {
    type: ROAD_INCIDENT_RECEIVED_BY_ID,
    incident,
  };
}

export function getRoadIncidents() {
  return dispatch => {
    fetch(`${Constants.URL}incidents`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        dispatch(roadIncidentsReceived(response));
      });
  };
}

export function getIncidentById(id) {
  return dispatch => {
    fetch(`${Constants.URL}incidents/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        dispatch(roadIncidentReceivedById(response));
      });
  };
}
