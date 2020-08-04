/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Loading from '../../../components/atoms/Loading';

describe('<Loading />', () => {
  test('Render del componente Loading', () => {
    const loading = mount(<Loading />);
    expect(loading.length).toEqual(1);
  });
});
