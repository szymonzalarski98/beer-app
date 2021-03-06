import React from 'react';
import { View, StyleSheet } from 'react-native';
import { deviceWidth, colors } from '../styles/helpers.style.js';

const Separator = () => <View testID="separator" style={styles.separator} />;

export default Separator;

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: deviceWidth * 0.05,
    height: 1,
    backgroundColor: colors.separator,
  },
});