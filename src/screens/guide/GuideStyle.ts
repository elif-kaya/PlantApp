import color from 'common/color';
import font_size from 'common/font_size';
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
      fontSize: font_size.font_24,
      color: '#fff',
    },
    image: {
      height: '100%',
      width: '100%',
    },
    imageBrushGuide1:{
        position: 'absolute',
        right: spacing.spacing_085,
        top: spacing.spacing_055,
    },
    imageBrushGuide2:{
        position: 'absolute',
        right: spacing.spacing_125,
        top: spacing.spacing_055,
        width: '38%'
    },
    title: {
      color: color.darkGray,
      fontSize: font_size.font_28,
      top: spacing.spacing_6,
      left: spacing.spacing_6,
      textAlign: 'left',
      lineHeight: spacing.spacing_9,
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
