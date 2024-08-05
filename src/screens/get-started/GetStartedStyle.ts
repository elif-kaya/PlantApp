import color from 'common/color';
import spacing from 'common/spacing';
import { StyleSheet } from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
  });
};
