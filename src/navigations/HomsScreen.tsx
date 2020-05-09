import React from 'react';
import axios from 'axios';
import Home from '../components/Home';

interface Props {
  navigation: {
    navigate: {}
  }
}

const BEERS_PER_PAGE = 20;

const HomeScreen: React.SFC<Props> = (props) => {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const getBeers = async () => {
    const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${BEERS_PER_PAGE}`);
    setData(response.data);
  };
  React.useEffect(() => {
    getBeers();
  }, []);
  return (
    <Home data={data} />
  );
};

export default HomeScreen;