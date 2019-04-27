import React, { useEffect , useState} from 'react';
import Routes from '../../routes';
import './AppWrapper.scss';
import Header from '../Header';
import Legends from '../Legends';
import Constants from '../../Constants/Constants';

const AppWrapper = props => {
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
    <div className="app-wrapper">
      <Header />
      <Legends />
      <Routes />
    </div>
  );
};

export default AppWrapper;
