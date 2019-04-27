import React from 'react';
import classnames from 'classnames';
import { MAGNITUDES } from '../../Constants/IncidentsConstants';
import './Legends.scss';

const Legends = () => ((
  <div className="legends-wrapper">
    <div className="legends-wrapper__description">Color indication of incident magnitudes</div>
    {
      MAGNITUDES.map((magnitude) => (
        <div key={magnitude.key} className="legends-wrapper__legend">
          <div className={classnames('legends-wrapper__legend__color-code', magnitude.key)}></div>
          <span>{magnitude.label}</span>
        </div>
      ))
    }
  </div>
));

export default Legends;
