import borderRadius from 'common/borderRadius';
import color from 'common/color';
import spacing from 'common/spacing';

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
      bottom: -spacing.spacing_9,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

    },
    dot: {
      width: spacing.spacing_06,
      height: spacing.spacing_06,
      borderRadius: borderRadius.borderRadius_5,
      backgroundColor: color.darkGray,
      marginHorizontal: spacing.spacing_05,
      opacity: 0.25
    },
    activeDot:{
      opacity: 1,
      width: spacing.spacing_010,
      height: spacing.spacing_010
    }
  });
};
