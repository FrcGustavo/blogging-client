/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../components/atoms/Button';

describe('<Button />', () => {
  test('Render del componente Button', () => {
    const button = mount(<Button>TEST</Button>);
    expect(button.length).toEqual(1);
  });
});
