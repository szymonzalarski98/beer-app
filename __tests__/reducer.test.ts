import reducer from '../src/reducers/index';

describe('Main reducer test', () => {
  it ('Should return default state', () => {
    const newState = reducer(undefined, {});
    let state = {
      filtersVisibility: false,
      filteringModeOn: false,
      data: [],
      currentPage: 1,
      abvFromValue: 0,
      abvToValue: 56,
      ibuFromValue: 0,
      ibuToValue: 1158,
    }
    expect(newState).toEqual(state);
  });
  it('Should update the data', () => {
    const newState = reducer(undefined, {
      type: 'UPDATE_DATA',
      payload: [{ id: 1, test: 'Test data' }],
    });
    let state = {
      filtersVisibility: false,
      filteringModeOn: false,
      data: [{ id: 1, test: 'Test data' }],
      currentPage: 2,
      abvFromValue: 0,
      abvToValue: 56,
      ibuFromValue: 0,
      ibuToValue: 1158,
    }
    expect(newState).toEqual(state);
  });
  it ('Should reset the data', () => {
    const newState = reducer(undefined, {
      type: 'RESET_DATA'
    });
    let state = {
      filtersVisibility: false,
      filteringModeOn: false,
      data: [],
      currentPage: 1,
      abvFromValue: 0,
      abvToValue: 56,
      ibuFromValue: 0,
      ibuToValue: 1158,
    }
    expect(newState).toEqual(state);
  });
  it ('Should update the abvFromValue parameter', () => {
    const newState = reducer(undefined, {
      type: 'SET_ABV_FROM_VALUE',
      payload: 4.5,
    });
    let state = {
      filtersVisibility: false,
      filteringModeOn: true,
      data: [],
      currentPage: 1,
      abvFromValue: 4.5,
      abvToValue: 56,
      ibuFromValue: 0,
      ibuToValue: 1158,
    }
    expect(newState).toEqual(state);
  });
})