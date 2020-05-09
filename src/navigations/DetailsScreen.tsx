import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const DetailsScreen = (props) => {
  const { route } = props;
  const { id } = route.params;
  const [data, setData] = React.useState({});
  const getBeerData = async (beerId) => {
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);
    setData(response.data[0]);
  };
  React.useEffect(() => {
    getBeerData(id);
  }, []);
  return (
    <View style={{flex: 1}}>
      {console.log(data)}
      <Text>Detale piwa</Text>
    </View>
  );
};

export default DetailsScreen;