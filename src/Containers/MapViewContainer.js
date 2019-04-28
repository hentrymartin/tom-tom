import { connect } from 'react-redux';
import MapView from '../Components/MapView';

const mapStateToProps = store => ({
  roadIncidents: store.RoadEventsReducer.roadIncidents,
});


export default connect(mapStateToProps)(MapView);
