import { connect } from 'react-redux';
import { getIncidentById } from '../Actions/RoadEventsAction';
import IncidentDetailedView from '../Components/IncidentDetailedView';

const mapStateToProps = store => ({
  incident: store.RoadEventsReducer.incident,
});

const mapDispatchToProps = dispatch => ({
  getIncidentById: id => {
    dispatch(getIncidentById(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IncidentDetailedView);
