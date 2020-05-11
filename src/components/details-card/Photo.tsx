import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { deviceWidth } from '../../styles/helpers.style';

interface Props {
  image_url: string;
};

const Photo: React.SFC<Props> = ({ image_url }) => {
  return (
    <View style={styles.imageContainer}>
      {
        image_url !== null
        ?
        <Image source={{ uri: image_url }} style={styles.image} resizeMode="contain" />
        :
        <View style={[styles.image, { backgroundColor: '#fafafa' }]} />
      }
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    margin: deviceWidth * 0.04,
    aspectRatio: 1,
  },
});