import React from 'react';
import { render, waitForElement, act } from 'react-native-testing-library';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MockedNavigator from '../src/utils/MockedNavigator';
import Home from '../src/components/Home';

const data = [
  {
    id: 1,
    name: 'Buzz',
    abv: 4.4,
    ibu: 4.5,
    image_url: 'https://images.punkapi.com/v2/1.png',
  },
  {
    id: 2,
    name: 'Trashy Blonde',
    abv: 4.4,
    ibu: 4.1,
    image_url: 'https://images.punkapi.com/v2/2.png',
  },
];

jest.mock('axios');

const mockStore = configureMockStore();

describe('Test Home component', () => {
  it ('Should render Product component two times', async () => {
    axios.get.mockResolvedValue({
      data
    });
    const HomeComponent = () =>  <Home data={data} isLoading={false} isEnd={false} getData={() => {}} handleFilters={() => {}} />;
    const store = mockStore({
      data: [],
      isLoading: false,
      getData: () => {},
      isEnd: true,
      handleFilters: () => {}
    });
    const { baseElement, getByText, getByTestId } = render(
      <Provider store={store}>
        <MockedNavigator component={HomeComponent} />
      </Provider>
    );
    await act( async () => await waitForElement(() => getByTestId('products-list')));
    expect(getByText('The list of beers')).toBeTruthy();
    expect(baseElement).toMatchSnapshot();
  });
});