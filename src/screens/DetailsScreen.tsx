import React from 'react';
import axios from 'axios';
import DetailsCard from '../components/details-card/DetailsCard';

interface Props {
  route: any
}

const DetailsScreen: React.SFC<Props> = (props) => {
  const { route } = props;
  const { id } = route.params;
  const [data, setData] = React.useState({});
  const [recommendedBeers, setRecommendedBeers] = React.useState([]);
  const lessThan = (val: number) => val + (val * 0.2);
  const greaterThan = (val: number) => val - (val * 0.2);
  const getSimilarBeers = async (abv: number, ibu: number, ebc: number) => {
    let url = `https://api.punkapi.com/v2/beers?abv_gt=${greaterThan(abv)}&abv_lt=${lessThan(abv)}&ibu_gt=${greaterThan(ibu)}&ibu_lt=${lessThan(ibu)}&ebc_gt=${greaterThan(ebc)}&ebc_lt=${lessThan(ebc)}`;
    const response = await axios.get(url);
    let filteredResponse = response.data.filter((item: { id: number}) => item.id !== id);
    setRecommendedBeers(filteredResponse);
  };
  const getBeerData = async (beerId: number) => {
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);
    let { name, description, image_url, ph, abv, ibu, ebc } = response.data[0];
    let beerObject = {
      name,
      description,
      image_url,
      ph,
      abv,
      ibu,
      ebc
    };
    setData(beerObject);
    getSimilarBeers(abv, ibu, ebc);
  };
  React.useEffect(() => {
    getBeerData(id);
  }, []);
  return (
    <DetailsCard data={data} recommendedBeers={recommendedBeers} />
  );
};

export default DetailsScreen;