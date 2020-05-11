import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { deviceWidth } from '../../styles/helpers.style';
import theme from '../../styles/theme.style';
import Recommendations from './Recommendations';
import Details from './Details';
import Photo from './Photo';

interface Props {
  data: {
    name: string;
    description: string;
    image_url: string;
    ph: number;
    abv: number;
    ibu: number;
    ebc: number;
  },
  id: number;
  recommendedBeers: [];
};

const DetailsCard: React.SFC<Props> = (props) => {
  const { data, recommendedBeers } = props;
  const { name, description, image_url, ph, abv, ibu, ebc } = props.data;
  return (
    <View style={styles.container}>
      {
        Object.keys(data).length > 0
        ?
        <>
          <Photo image_url={image_url} />
          <Details
            name={name}
            description={description}
            abv={abv}
            ibu={ibu}
            ebc={ebc}
            ph={ph}
          />
          <Recommendations recommendedBeers={recommendedBeers} />
        </>
        :
        <View style={theme.activityIndicator}>
          <ActivityIndicator />
        </View>
      }
    </View>
  );
};

export default React.memo(DetailsCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: deviceWidth * 0.05,
  },
});