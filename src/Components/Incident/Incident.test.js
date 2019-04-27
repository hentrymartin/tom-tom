import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Incident from './index';
import { MAGNITUDE_MAP } from '../../Constants/IncidentsConstants';
import { incident } from '../../../mockData/mocks';

describe('Incident', () => {
  it('should render correctly', () => {
    const component = shallow(<Incident incident={incident} />);

    expect(component).toMatchSnapshot();
  });

  it('Check for severity label', () => {
    const component = mount(
      <MemoryRouter>
        <Incident incident={incident} />
      </MemoryRouter>,
    );

    expect(component.find('.severity-label').text()).toBe(MAGNITUDE_MAP[incident.magnitude]);
  });
});
