import color from 'common/color';

import { Dimensions, StyleSheet } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    slide: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    dotsContainer: {
      position: 'absolute',
      bottom: -40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 5,
      backgroundColor: color.darkGray,
      marginHorizontal: 5,
      opacity: 0.25
    },
    activeDot:{
      opacity: 1,
      width: 10,
      height: 10
    }
  });
};
