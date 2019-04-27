import React from 'react';
import Constants from '../../Constants/Constants';
import './Header.scss';

const Header = () => ((
  <header className="header">
    <h2>
      <a href={`${Constants.FE_URL}/home`}>Incidents Viewer</a>
    </h2>
  </header>
));

export default Header;