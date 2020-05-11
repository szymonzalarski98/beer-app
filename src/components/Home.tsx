import React from 'react';
import { SafeAreaView, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FILTERS_VISIBILITY } from '../actions/types';
import { deviceWidth } from '../styles/helpers.style';
import theme from '../styles/theme.style';
import Filters from './filters/Filters';
import Product from './Product';
import Separator from './Separator';
interface Product {
  name: String;
  image_url: String;
  id: number;
  abv: number;
  ibu: number;
};

interface Props {
  data: Product [];
  isLoading: boolean;
  getData: Function;
  isEnd: boolean;
  handleFilters: Function;
};

const Home: React.SFC<Props> = (props) => {
  const dispatch = useDispatch();
  const filtersVisibility = useSelector((state: any) => state.filtersVisibility);
  const { data, isLoading, getData, isEnd, handleFilters } = props;
  let onEndReachedCalledDuringMomentum: boolean = true;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[theme.title, styles.title]}>The list of beers</Text>
      {
        filtersVisibility
        ?
        <Filters handleFilters={handleFilters} />
        :
        <Text
          style={[theme.text, styles.filters]}
          onPress={() => dispatch({ type: FILTERS_VISIBILITY, payload: true })}
        >
          Filters
        </Text>
      }
      <FlatList
        data={data}
        renderItem={({ item }) => <Product id={item.id} name={item.name} image={item.image_url} abv={item.abv} ibu={item.ibu} />}
        ListEmptyComponent={() => <Text style={[theme.text, { marginLeft: deviceWidth * 0.05 }]}>No results</Text>}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => {
          if (!onEndReachedCalledDuringMomentum) {
            getData();
            onEndReachedCalledDuringMomentum = true;
          }
        }}
        onMomentumScrollBegin={() => onEndReachedCalledDuringMomentum = false}
        ListFooterComponent={() => !isEnd ? (isLoading && <ActivityIndicator style={styles.activityIndicator} />) : <Text style={[theme.text, { textAlign: 'center' }]}>End.</Text>}
        testID="products-list"
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10
  },
  activityIndicator: {
    marginBottom: 5,
  },
  filters: {
    textAlign: 'right',
    marginRight: deviceWidth * 0.05,
    fontWeight: 'bold',
  }
});