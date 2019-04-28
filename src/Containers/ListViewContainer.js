import { connect } from 'react-redux';
import ListView from '../Components/ListView';

const mapStateToProps = store => ({
  roadIncidents: store.RoadIncidentsReducer.roadIncidents,
});

export default connect(mapStateToProps)(ListView);
