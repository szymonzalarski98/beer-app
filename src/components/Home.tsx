import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product from './Product';
import Separator from './Separator';

interface Product {
  name: String;
  image_url: String;
  id: number,
  abv: number,
  ph: number,
};

interface Props {
  data: Product [],
};

const Home: React.SFC<Props> = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Product id={item.id} name={item.name} image={item.image_url} abv={item.abv} ph={item.ph} />}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => alert('end reached')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});