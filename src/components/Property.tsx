import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSize } from '../styles/helpers.style';
import theme from '../styles/theme.style';

interface Props {
  title: String;
  text: String | number;
}

const Property: React.SFC<Props> = ({ title = '', text = ''}) => {
  return (
    <View style={styles.container}>
      { title !== '' ? <Text style={[theme.text, styles.label]}>{title}</Text> : null}
      <Text style={theme.text}>{text}</Text>
    </View>
  );
};

export default Property;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: '600',
  },
});