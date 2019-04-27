import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MapView from './index';
import { incidents } from '../../../mockData/mocks';

describe('Map View', () => {
  it('should render correctly', () => {
    const component = shallow(<MapView incidents={incidents} />);

    expect(component).toMatchSnapshot();
  });

  it('Check for number of incidents in the list', () => {
    const component = mount(
      <MemoryRouter>
        <MapView incidents={incidents} />
      </MemoryRouter>,
    );

    expect(component.find('.incident-wrapper').length).toBe(incidents.length);
  });
});
