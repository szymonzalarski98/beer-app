import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const colors = {
  text: '#383838',
  separator: '#D0D0D0'
};
export const fontSize = {
  large: deviceWidth * 0.06,
  medium: deviceWidth * 0.035,
};
