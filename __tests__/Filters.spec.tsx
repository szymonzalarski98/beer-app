import React from 'react';
import { render } from 'react-native-testing-library';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Filters from '../src/components/filters/Filters';

const mockStore = configureMockStore();

describe('Test Filters component', () => {
  it ('Should renders correctly', () => {
    const store = mockStore({
      abvFromValue: 0,
      abvToValue: 1,
      ibuFromValue: 0,
      ibuToValue: 1,
    });
    const { baseElement, getByText } = render(
      <Provider store={store}>
        <Filters handleFilters={() => {}} />
      </Provider>
    );
    expect(getByText('Filters')).not.toBeNull();
    expect(getByText('Hide')).not.toBeNull();
    expect(getByText('Abv from: 0')).not.toBeNull();
    expect(getByText('Abv to: 1')).not.toBeNull();
    expect(getByText('Ibu from: 0')).not.toBeNull();
    expect(getByText('Ibu to: 1')).not.toBeNull();
    expect(baseElement).toMatchSnapshot();
  });
})