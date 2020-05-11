import React from 'react';
import { render, act } from 'react-native-testing-library';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import HomeScreen from '../src/screens/HomeScreen';
import axios from 'axios';

jest.mock('axios');

const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=20';

const data = [
  {
    id: 1,
    name: 'Buzz',
    ph: 4.4,
    abv: 4.5,
    image_url: 'https://images.punkapi.com/v2/1.png',
  },
  {
    id: 2,
    name: 'Trashy Blonde',
    ph: 4.4,
    abv: 4.1,
    image_url: 'https://images.punkapi.com/v2/2.png',
  },
];

const mockStore = configureMockStore();

describe('Test Home component', () => {
  it ('Should match snapshot', async () => {
    axios.get.mockResolvedValueOnce({
      data
    });
    const store = mockStore({
      filteringModeOn: false,
      data: [],
      currentPage: 1,
    });
    await act(async () =>  await axios.get(url));
    const { baseElement } = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
    // two times because the test and the component make single api call
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(baseElement).toMatchSnapshot();
  });
});