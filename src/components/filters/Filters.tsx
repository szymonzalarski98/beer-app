import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import { useDebouncedCallback } from 'use-debounce';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_FILTERS, FILTERS_VISIBILITY, RESET_DATA, SET_ABV_FROM_VALUE, SET_ABV_TO_VALUE, SET_IBU_FROM_VALUE, SET_IBU_TO_VALUE } from '../../actions/types';
import { deviceWidth } from '../../styles/helpers.style';
import theme from '../../styles/theme.style';

interface Props {
  handleFilters: Function;
}

const Filters: React.SFC<Props> = ({ handleFilters }) => {
  const dispatch = useDispatch();
  const abvFromValue = useSelector((state: any) => state.abvFromValue);
  const abvToValue = useSelector((state: any) => state.abvToValue);
  const ibuFromValue = useSelector((state: any) => state.ibuFromValue);
  const ibuToValue = useSelector((state: any) => state.ibuToValue);
  const [debouncedCallback] = useDebouncedCallback(
    () => {
      dispatch({ type: RESET_DATA });
      handleFilters(abvFromValue, abvToValue, ibuFromValue, ibuToValue);
    },
    1000
  );
  const hide = () => {
    dispatch({ type: FILTERS_VISIBILITY, payload: false });
  }
  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Text style={[theme.text, styles.title]}>Filters</Text>
        <Text style={[theme.text, styles.label, { textAlign: 'right' }]} onPress={() => hide()}>Hide</Text>
      </View>
      <Text style={[theme.text, styles.label]}>Abv from: {abvFromValue}</Text>
      <Slider
        value={abvFromValue}
        onValueChange={(value: number) => {
          dispatch({ type: SET_ABV_FROM_VALUE, payload: Math.round(value)});
          debouncedCallback();
        }}
        minimumValue={0}
        maximumValue={56}
      />
       <Text style={[theme.text, styles.label]}>Abv to: {abvToValue}</Text>
      <Slider
        value={abvToValue}
        onValueChange={(value: number) => {
          dispatch({ type: SET_ABV_TO_VALUE, payload: Math.round(value)});
          debouncedCallback();
        }}
        minimumValue={0}
        maximumValue={56}
      />
      <Text style={[theme.text, styles.label]}>Ibu from: {ibuFromValue}</Text>
      <Slider
        value={ibuFromValue}
        onValueChange={(value: number) => {
          dispatch({ type: SET_IBU_FROM_VALUE, payload: Math.round(value)});
          debouncedCallback();
        }}
        minimumValue={0}
        maximumValue={1158}
      />
      <Text style={[theme.text, styles.label]}>Ibu to: {ibuToValue}</Text>
      <Slider
        value={ibuToValue}
        onValueChange={(value: number) => {
          dispatch({ type: SET_IBU_TO_VALUE, payload: Math.round(value)});
          debouncedCallback();
        }}
        minimumValue={0}
        maximumValue={1158}
      />
      <Text
        onPress={() => dispatch({ type: CLEAR_FILTERS })}
        style={[theme.text, styles.label, { marginBottom: 10 }]}
      >
        Clear
      </Text>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: deviceWidth * 0.05,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold'
  },
});