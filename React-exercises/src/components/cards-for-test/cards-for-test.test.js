import React from 'react';
import { shallow } from 'enzyme';

import Card from './cards-for-test';

it('tests Card component using snapshot from enzyme', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});