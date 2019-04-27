import { connect } from 'react-redux';
import AppWrapper from '../Components/AppWrapper';
import { getRoadIncidents } from '../Actions/RoadEventsAction';

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
)(AppWrapper);
