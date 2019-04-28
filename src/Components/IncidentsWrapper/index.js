import React, { useEffect , useState} from 'react';
import { Route } from 'react-router-dom';
import MapViewContainer from '../../Containers/MapViewContainer';
import ListViewContainer from '../../Containers/ListViewContainer';
import Constants from '../../Constants/Constants';

const IncidentsWrapper = (props) => {

  const [timerID, setTimerID] = useState();

  useEffect(() => {
    props.getRoadIncidents();

    setTimerID(
      setInterval(() => {
        props.getRoadIncidents();
      }, Constants.POLLING_INTERVAL)
    );

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="incidents-wrapper">
      <Route path="/incidents/map" component={MapViewContainer} />
      <Route path="/incidents/list" component={ListViewContainer} />
    </div>
  );
}

IncidentsWrapper.defaultProps = {
  getRoadIncidents: () => {},
};

export default IncidentsWrapper;
