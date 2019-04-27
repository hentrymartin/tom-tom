import { ROAD_INCIDENTS_RECEIVED, ROAD_INCIDENT_RECEIVED_BY_ID } from '../Actions/RoadEventsAction';

const initialState = {
  roadIncidents: [],
  incident: {},
};

export default function RoadEventsReducer(state = initialState, action) {
  switch (action.type) {
    case ROAD_INCIDENTS_RECEIVED:
      return {
        ...state,
        roadIncidents: action.roadIncidents,
      };
    case ROAD_INCIDENT_RECEIVED_BY_ID:
      return {
        ...state,
        incident: action.incident,
      };
    default:
      return state;
  }
}
