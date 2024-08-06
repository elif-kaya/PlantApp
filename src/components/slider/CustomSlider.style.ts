import color from 'common/color';

import { Dimensions, StyleSheet } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    slide: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#1EB1FC',
      marginHorizontal: 5,
    },
  });
};
