import color from 'common/color';
import spacing from 'common/spacing';
import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      color: '#fff',
    },
    image: {
        height: '100%',
        width: '100%',
      },
  });
};
