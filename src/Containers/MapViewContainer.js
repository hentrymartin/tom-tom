import { connect } from 'react-redux';
import MapView from '../Components/MapView';

const mapStateToProps = store => ({
  roadIncidents: store.RoadEventsReducer.roadIncidents,
});

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapView);
