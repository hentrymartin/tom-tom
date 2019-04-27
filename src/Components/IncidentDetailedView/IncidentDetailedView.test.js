import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import IncidentDetailedView from './index';
import { TYPE_MAP } from '../../Constants/IncidentsConstants';
import { incident } from '../../../mockData/mocks';

describe('Incident Detailed View', () => {
  const mockParams = {
    match: {
      params: {
        id: 'europe_HD_DE_TTL6000',
      },
    },
  };
  const getIncidentById = () => {};

  it('should render correctly', () => {
    const component = shallow(
      <IncidentDetailedView incident={incident} getIncidentById={getIncidentById} {...mockParams} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('Check for type label', () => {
    const component = mount(
      <MemoryRouter>
        <IncidentDetailedView incident={incident} getIncidentById={getIncidentById} {...mockParams} />
      </MemoryRouter>,
    );

    expect(
      component
        .find('.incident-detailed-view__info__type')
        .find('span')
        .text(),
    ).toBe(TYPE_MAP[incident.type]);
  });
});
