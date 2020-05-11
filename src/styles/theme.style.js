import { StyleSheet } from 'react-native';
import { colors, fontSize } from './helpers.style';

export default StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: fontSize.medium,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: fontSize.large,
    fontWeight: '500',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});