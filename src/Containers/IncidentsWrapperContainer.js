import { connect } from 'react-redux';
import { getRoadIncidents } from '../Actions/RoadEventsAction';
import IncidentsWrapper from '../Components/IncidentsWrapper';

const mapStateToProps = store => ({
  roadIncidents: store.RoadEventsReducer.roadIncidents,
});

const mapDispatchToProps = dispatch => ({
  getRoadIncidents: () => {
    dispatch(getRoadIncidents());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentsWrapper);
