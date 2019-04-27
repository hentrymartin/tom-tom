import { connect } from 'react-redux';
import ListView from '../Components/ListView';

const mapStateToProps = store => ({
  roadIncidents: store.RoadEventsReducer.roadIncidents,
});

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListView);
