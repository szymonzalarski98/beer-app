import React from 'react';
import { render } from 'react-native-testing-library';
import MockedNavigator from '../src/utils/MockedNavigator';
import RecommendedBeer from '../src/components/details-card/RecommendedBeer';

describe('Test RecommendedBeer component', () => {
  const RecommendedBeerComponent = () => <RecommendedBeer id={1} name="Test" abv={10} ibu={11} image_url="test_image" />;
  it ('Should match snapshot', () => {
    const { baseElement, getByText } = render(<MockedNavigator component={RecommendedBeerComponent} />);
    expect(getByText('Test')).not.toBeNull();
    expect(getByText('10')).not.toBeNull();
    expect(getByText('11')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  });
});