import color from 'common/color';
import font_size from 'common/font_size';
import spacing from 'common/spacing';
import { StyleSheet } from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    header: {alignContent: 'flex-start'},
    title:{
      color: color.darkGray,
      fontSize: font_size.font_28,
      textAlign: 'left',
      lineHeight: 40
    },
    info:{
      color: color.darkGray_70,
      fontSize: font_size.font_16,
      textAlign: 'left',
      lineHeight: 22,
      letterSpacing: 0.07
    },
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    view: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 70,

    },
    image: {
      minHeight: '70%',
      marginTop: 30,
      width: '100%',
    },
    buttonContainer:{
      width: '100%',
      marginTop: -50,
      paddingHorizontal: 20, 
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 50
    },
    bottomButtonContainer: { position: 'absolute',
    bottom: 0, flexDirection: 'row', width: '18%', justifyContent: 'center'},
    agreePolicies:{
      color: color.lightGray_70,
      fontSize: font_size.font_11,
      marginBottom: 10
    },
    agreePoliciesButtons:{
      color: color.lightGray_70,
      fontSize: font_size.font_11
    }
  });
};
