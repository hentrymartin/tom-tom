import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import IncidentRoute from './index';
import { incident } from '../../../mockData/mocks';

describe('Incident Route', () => {
  it('should render correctly', () => {
    const component = shallow(<IncidentRoute from={incident.from} to={incident.to} />);

    expect(component).toMatchSnapshot();
  });

  it('Check for from value', () => {
    const component = mount(
      <MemoryRouter>
        <IncidentRoute from={incident.from} to={incident.to} />
      </MemoryRouter>,
    );

    expect(component.find('.route-affected__from').text()).toBe(incident.from);
  });
});
