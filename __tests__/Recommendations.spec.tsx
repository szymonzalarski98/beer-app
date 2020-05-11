import React from 'react';
import { render } from 'react-native-testing-library';
import Recommendations from '../src/components/details-card/Recommendations';

describe('Test Recommendations component', () => {
  it ('Should match snapshot', () => {
    const { baseElement, getByText } = render(<Recommendations recommendedBeers={[]} />);
    expect(getByText('Similar beers')).not.toBeNull();
    expect(getByText('There are no similar beers.')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  });
});