import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color, fontSize, deviceWidth } from '../../styles/helpers.style';
import Property from '../Property';

interface Props {
  id: number;
  name: String;
  abv: number;
  ibu: number;
  image_url: string;
}

const RecommendedBeer: React.SFC<Props> = (props) => {
  const { id, name, abv, ibu, image_url } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push('Details', { id })} style={styles.container}>
      {
        image_url !== null
        ?
        <Image source={{ uri: image_url }} style={styles.image} resizeMode="contain" />
        :
        <View style={styles.blankImage} />
      }
      <View style={styles.infoContainer}>
        <View style={{ flex: 1.5 }} />
        <Property title="" text={name} />
        <Property title="Abv: " text={abv} />
        <Property title="Ibu: " text={ibu} />
        <View style={{ flex: 1.5 }} />
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedBeer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    flex: 0.5,
    aspectRatio: 1,
    margin: 10,
  },
  blankImage: {
    flex: 0.5,
    aspectRatio: 1,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#fafafa'
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginLeft: deviceWidth * 0.05,
  },
})