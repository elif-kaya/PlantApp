import { StyleSheet } from 'react-native';

import color from 'common/color';
import spacing from 'common/spacing';
import { borderNumeric } from 'common/border';
import font_size from 'common/font_size';
import borderRadius from 'common/borderRadius';

interface StyleProps {
  textColor: string;
}

export const getStyles = ({ textColor}: StyleProps) => {
  return StyleSheet.create({
    buttonContainer: {
      height: spacing.spacing_11,
      width: '100%',
    },
    innerContainerPrimary: {
      flex: 1,
      height: spacing.spacing_11,
      borderRadius: borderRadius.borderRadius_12,
      borderWidth: 0,
      borderColor: color.white,
      backgroundColor: color.green,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1,
    },
    innerContainerSecondary: {
      flex: 1,
      height: spacing.spacing_10,
      borderRadius: borderRadius.borderRadius_12,
      borderWidth: borderNumeric.border_2,
      borderColor: color.green,
      backgroundColor: color.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1,
    },
    innerContainerDisabled: {
      opacity: 0.5,
    },
    text: {
      
      fontSize: font_size.font_16,
      textAlign: 'center',
      textDecorationLine: 'none',
      textDecorationColor: color.lightGray
    },
    textPrimary: {
      color: color.white,
    },
    textTertiary: {
      color: color.lightGray_70,
      fontSize: 11,
      textDecorationLine: 'underline',
    },
    textTransparent: {
      color: textColor ? textColor : color.white,
    },
    textWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.spacing_2,
    },
    leftIcon: {
      width: spacing.spacing_4,
      height: spacing.spacing_5,
    },
    leftAlign: {
      justifyContent: 'flex-start',
    },
    rightAlign: {
      justifyContent: 'flex-end',
    },
  });
};
