import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import MockedNavigator from '../src/utils/MockedNavigator';
import Product from '../src/components/Product';

describe('Test Product component', () => {
  const ProductComponent = () => <Product id={1} name="Buzz" image="test-image-link" abv={4.5} ibu={4.1} />;
  it ('Should render product component', () => {
    const { getByText, baseElement } = render(<MockedNavigator component={ProductComponent} />);
    expect(getByText('Buzz')).not.toBeNull();
    expect(getByText('Alcohol by volume: ')).not.toBeNull();
    expect(getByText('4.5')).not.toBeNull();
    expect(getByText('Ibu: ')).not.toBeNull();
    expect(getByText('4.1')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  });
  it ('Should click on the product', () => {
    const { getByTestId, getByText } = render(<MockedNavigator component={ProductComponent} />);
    const button = getByTestId('product');
    fireEvent(button, 'press');
  })
});