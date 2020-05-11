import React from 'react';
import { render } from 'react-native-testing-library';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Details from '../src/components/details-card/Details';

const mockStore = configureMockStore();

describe('Test Details component', () => {
  it ('Should renders correctly', () => {
    const store = mockStore({
      name: 'test',
      description: 'test',
      abv: 1,
      ibu: 1,
      ebc: 1,
      ph: 1,
    });
    const { baseElement, getByText } = render(
      <Provider store={store}>
        <Details name="Test" description="Test description" abv={10} ibu={100} ebc={30} ph={20} />
      </Provider>
    );
    expect(getByText('Test')).not.toBeNull();
    expect(getByText('Test description')).not.toBeNull();
    expect(getByText('10')).not.toBeNull();
    expect(getByText('100')).not.toBeNull();
    expect(getByText('30')).not.toBeNull();
    expect(getByText('20')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  });
})