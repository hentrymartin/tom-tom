import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ListView from './index';
import { incidents } from '../../../mockData/mocks';

describe('List View', () => {
  it('should render correctly', () => {
    const component = shallow(<ListView incidents={incidents} />);

    expect(component).toMatchSnapshot();
  });

  it('Check for number of incidents in the list', () => {
    const component = mount(
      <MemoryRouter>
        <ListView incidents={incidents} />
      </MemoryRouter>,
    );

    expect(component.find('.incident-row').length).toBe(incidents.length);
  });
});
