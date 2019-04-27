import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import HomeView from './index';

describe('HomeView', () => {
  it('should render correctly', () => {
    const component = shallow(<HomeView />);

    expect(component).toMatchSnapshot();
  });

  it('Check for menus', () => {
    const component = mount(
      <MemoryRouter>
        <HomeView />
      </MemoryRouter>,
    );

    expect(component.find('img').length).toBe(2);
  });
});
