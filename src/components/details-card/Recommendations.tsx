import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { fontSize, colors } from '../../styles/helpers.style';
import RecommendedBeer from './RecommendedBeer';

interface Beer {
  id: number;
  name: string;
  image_url: string;
  ibu: number;
  abv: number;
  ebc: number;
};

interface Props {
  recommendedBeers: Beer [];
}

const Recommendations: React.SFC<Props> = (props) => {
  const { recommendedBeers } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar beers</Text>
      {
        recommendedBeers.length > 0 ?
        <Swiper>
          {recommendedBeers.map(item => <RecommendedBeer key={item.id} id={item.id} name={item.name} abv={item.abv} ibu={item.ibu} image_url={item.image_url} />)}
        </Swiper>
        :
        <Text style={[styles.title, { fontSize: fontSize.medium }]}>There are no similar beers.</Text>
      }
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: fontSize.large,
    fontWeight: '500',
    marginBottom: 10,
    color: colors.text,
    paddingTop: 10,
  },
});