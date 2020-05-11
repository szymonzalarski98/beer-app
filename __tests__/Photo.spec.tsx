import React from 'react';
import { render } from 'react-native-testing-library';
import Photo from '../src/components/details-card/Photo';

describe('Test Photo component', () => {
  it ('Should match snapshot', () => {
    const { baseElement } = render(<Photo image_url="test" />);
    expect(baseElement).toMatchSnapshot();
  });
});