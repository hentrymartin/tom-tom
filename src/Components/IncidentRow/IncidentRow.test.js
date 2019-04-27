import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import IncidentRow from './index';
import { MAGNITUDE_MAP } from '../../Constants/IncidentsConstants';
import { incident } from '../../../mockData/mocks';

describe('Incident Row', () => {
  it('should render correctly', () => {
    const component = shallow(<IncidentRow incident={incident} />);

    expect(component).toMatchSnapshot();
  });

  it('Check for severity class', () => {
    const component = mount(
      <MemoryRouter>
        <IncidentRow incident={incident} />
      </MemoryRouter>,
    );

    expect(component.find('.incident-row__severity').hasClass(MAGNITUDE_MAP[incident.magnitude].toLowerCase())).toBe(
      true,
    );
  });
});
