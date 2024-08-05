import color from 'common/color';

import { StyleSheet } from 'react-native';

export const getStyles = (weight) => {
  return StyleSheet.create({
    text: {
      fontFamily: 'sans-serif',
      fontWeight: weight,
      color: color.darkGray,
    },
  });
};
