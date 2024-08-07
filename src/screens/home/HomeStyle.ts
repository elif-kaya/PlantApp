import color from 'common/color';
import spacing from 'common/spacing';
import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    slide: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    text: {
      fontSize: 24,
      color: '#fff',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    imageBrushGuide1:{
        position: 'absolute',
        right: 85,
        top: 55,
    },
    imageBrushGuide2:{
        position: 'absolute',
        right: 125,
        top: 55,
        width: '38%'
    },
    title: {
      color: color.darkGray,
      fontSize: 28,
      top: 24,
      left: 24,
      textAlign: 'left',
      lineHeight: 40,
      width: '70%',
    },
    buttonContainer: {
      width: '80%',
      alignContent: 'center',
      justifyContent: 'center',
      left: '10%',
      bottom: '10%'
    },
  });
};
