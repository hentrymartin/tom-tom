import { ROAD_INCIDENTS_RECEIVED, ROAD_INCIDENT_RECEIVED_BY_ID } from '../Actions/RoadEventsAction';

const initialState = {
  roadIncidents: [],
  incident: {},
};

export default function RoadIncidentsReducer(state = initialState, action) {
  switch (action.type) {
    case ROAD_INCIDENTS_RECEIVED:
      return {
        ...state,
        // This will sort the incidents by descending on delay
        roadIncidents: action.roadIncidents.sort((a, b) => b.delay - a.delay),
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
