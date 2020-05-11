import { 
  FILTERS_VISIBILITY,
  CLEAR_FILTERS,
  UPDATE_DATA,
  RESET_DATA,
  SET_ABV_FROM_VALUE,
  SET_ABV_TO_VALUE,
  SET_IBU_FROM_VALUE,
  SET_IBU_TO_VALUE
} from '../actions/types';

const initialState = {
  filtersVisibility: false,
  filteringModeOn: false,
  data: [],
  currentPage: 1,
  abvFromValue: 0,
  abvToValue: 56,
  ibuFromValue: 0,
  ibuToValue: 1158,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTERS_VISIBILITY:
      return {
        ...state,
        filtersVisibility: action.payload,
      }
    case CLEAR_FILTERS:
      return {
        ...state,
        data: [],
        currentPage: 1,
        filtersVisibility: false,
        filteringModeOn: false,
        abvFromValue: 0,
        abvToValue: 56,
        ibuFromValue: 0,
        ibuToValue: 1158,
      }
    case UPDATE_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        currentPage: state.currentPage + 1
      }
    case RESET_DATA: 
      return {
        ...state,
        data: [],
        currentPage: 1,
      }
    case SET_ABV_FROM_VALUE:
      return {
        ...state,
        filteringModeOn: true,
        abvFromValue: action.payload,
      }
    case SET_ABV_TO_VALUE:
      return {
        ...state,
        filteringModeOn: true,
        abvToValue: action.payload,
      }
    case SET_IBU_FROM_VALUE:
      return {
        ...state,
        filteringModeOn: true,
        ibuFromValue: action.payload,
      }
    case SET_IBU_TO_VALUE:
      return {
        ...state,
        filteringModeOn: true,
        ibuToValue: action.payload,
      }
    default:
      return state
  }
}

export default reducer;