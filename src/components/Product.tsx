import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deviceWidth, colors, fontSize } from '../styles/dimensions.js';

// name, image, tags for filter
interface Props {
  id: number,
  name: String;
  image: String;
  abv: number,
  ph: number,
};

const Product: React.SFC<Props> = (props) => {
  const { name, image, abv, ph, id } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { id })} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode={'contain'} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}><Text style={styles.label}>Name: </Text>{name}</Text>
        <Text style={styles.text}><Text style={styles.label}>Alcohol by volume: </Text>{abv}</Text>
        <Text style={styles.text}><Text style={styles.label}>pH: </Text>{ph}</Text>
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
  text: {
    color: colors.text,
    fontSize: fontSize.medium,
  },
  label: {
    fontWeight: '600',
  },
});