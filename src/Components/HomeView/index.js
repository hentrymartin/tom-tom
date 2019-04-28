import React from 'react';
import {Link} from 'react-router-dom';
import { Images } from '../../Images';
import './HomeView.scss';

const HomeView = () => ((
  <div className="home-view-wrapper">
    <Link to="/incidents/map">
      <img src={Images.MAP_VIEW} alt="Map view icon" />
      <div>Map View</div>
    </Link>

    <Link to="/incidents/list">
      <img src={Images.LIST_VIEW} alt="List view icon" />
      <div>List View</div>
    </Link>
  </div>
));

export default HomeView;