import React from 'react';
import { render } from 'react-native-testing-library';
import Separator from '../src/components/Separator';

describe('Test Separator component', () => {
  it ('Should renders correctly', () => {
    const { getByTestId, baseElement } = render(<Separator />);
    expect(getByTestId('separator')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  });
});