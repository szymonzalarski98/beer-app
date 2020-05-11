import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_DATA } from '../actions/types';
import Home from '../components/Home';

const BEERS_PER_PAGE = 20;

const HomeScreen: React.SFC = () => {
  const dispatch = useDispatch();
  const filteringModeOn = useSelector((state: any) => state.filteringModeOn);
  const data = useSelector((state: any) => state.data);
  const currentPage = useSelector((state: any) => state.currentPage);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEnd, setIsEnd] = React.useState(false);
  const handleFilters = async (abvFromValue: number, abvToValue: number, ibuFromValue: number, ibuToValue: number) => {
    setIsLoading(true);
    let url = `https://api.punkapi.com/v2/beers?abv_gt=${abvFromValue}&abv_lt=${abvToValue}&ibu_gt=${ibuFromValue}&ibu_lt=${ibuToValue}`;
    const response = await axios.get(url);
    dispatch({ type: UPDATE_DATA, payload: response.data });
    setIsLoading(false);
  };
  const getData = async () => {
    if (filteringModeOn) return;
    let url = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${BEERS_PER_PAGE}`;
    setIsLoading(true);
    const response = await axios.get(url);
    if (response.data.length > 0) {
      dispatch({ type: UPDATE_DATA, payload: response.data });
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsEnd(true);
    }
  };
  React.useEffect(() => {
    getData();
  }, [filteringModeOn]);
  return (
    <Home data={data} isLoading={isLoading} getData={getData} isEnd={isEnd} handleFilters={handleFilters} />
  );
};

export default HomeScreen;