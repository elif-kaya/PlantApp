import color from 'common/color';
import font_size from 'common/font_size';
import spacing from 'common/spacing';
import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    imageBackgroundImageStyle: {
      resizeMode: 'contain',
      height: spacing.spacing_50,
    },
    imageBackgroundStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: color.white,
    },
    premiumContainer:{
      width: '90%',
      height: spacing.spacing_16,
      borderRadius: 14,
      backgroundColor: color.black,
      flexDirection: 'row',
      padding: spacing.spacing_010
    },
    container: {
      top: spacing.spacing_55,
      left: '5%',
    },
    messageIcon:{
      width: spacing.spacing_050,
      height: spacing.spacing_050,
    },
    freePremium: {
      color: color.gold,
      fontSize: font_size.font_16,
      lineHeight: 21,
      letterSpacing: -0.32,
      marginLeft: spacing.spacing_010
    }
  });
};
