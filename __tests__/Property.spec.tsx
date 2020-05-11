import React from 'react';
import { render } from 'react-native-testing-library';
import Property from '../src/components/Property';

describe('Test Property component', () => {
  it ('Should renders correctly', () => {
    const { baseElement, getByText } = render(<Property title="Title" text="Test text" />);
    expect(getByText('Title')).not.toBeNull();
    expect(getByText('Test text')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  })
})