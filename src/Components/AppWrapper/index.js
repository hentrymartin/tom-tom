import React from 'react';
import Routes from '../../routes';
import './AppWrapper.scss';
import Header from '../Header';
import Legends from '../Legends';

const AppWrapper = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Legends />
      <Routes />
    </div>
  );
};

export default AppWrapper;
