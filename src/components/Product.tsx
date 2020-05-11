import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deviceWidth } from '../styles/helpers.style';
import Property from './Property';

// name, image, tags for filter
interface Props {
  id: number,
  name: String;
  image: String;
  abv: number,
  ibu: number,
};

const Product: React.SFC<Props> = (props) => {
  const { name, image, abv, ibu, id } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity testID="product" onPress={() => navigation.navigate('Details', { id })} style={styles.container}>
      {
        image !== null
        ?
        <Image source={{ uri: image }} style={styles.image} resizeMode={'contain'} />
        :
        <View style={styles.blankImage} />
      }
      <View style={styles.infoContainer}>
        <Property title="" text={name} />
        <Property title="Alcohol by volume: " text={abv} />
        <Property title="Ibu: " text={ibu} />
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: deviceWidth * 0.05,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginLeft: deviceWidth * 0.05,
  },
  image: {
    aspectRatio: 1,
    width: 80,
    height: 80,
  },
  blankImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#fafafa'
  }
});