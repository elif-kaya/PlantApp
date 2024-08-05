import color from 'common/color';

import { StyleSheet } from 'react-native';

export const getStyles = (weight) => {
  return StyleSheet.create({
    text: {
      fontWeight: weight,
      color: color.darkGray,
    },
  });
};
