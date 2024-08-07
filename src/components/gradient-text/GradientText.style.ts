import color from 'common/color';
import font_size from 'common/font_size';

import { StyleSheet } from 'react-native';

export const getStyles = (weight) => {
  return StyleSheet.create({
    container: {
      flex:1
    },
    gradient: {
      ...StyleSheet.absoluteFillObject,
    },
    text: {
      fontSize: font_size.font_24,
      fontWeight: 'bold',
      backgroundColor: 'transparent', // Required to see the gradient
    },
  });
};
