import color from 'common/color';
import spacing from 'common/spacing';
import {StyleSheet} from 'react-native';

export const getStyles = () => {
  return StyleSheet.create({
    imageBackgroundImageStyle: {
      resizeMode: 'contain',
      height: 571,
    },
    imageBackgroundStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: color.darkGreen,
    },
    title: {
      color: color.white,
      fontSize: 30,
    },
    description: {
      color: color.white_70,
      fontSize: 17,
      paddingVertical: 12,
    },
    container: {
      top: 320,
      left: '5%',
    },
    slide: {
      padding: 16,
      width: 156,
      height: 130,
      borderRadius: 14,
      backgroundColor: color.white_8,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginRight: 10,
    },
    scrollContainer: {
      flexDirection: 'row', // Ensure horizontal layout
      marginVertical: 20, // Margin around the container
    },
    iconContainer: {
      width: 36,
      height: 36,
      borderRadius: 8,
      marginBottom: 16,
      backgroundColor: color.black_24,
    },
    sliderTitleText: {
      fontSize: 20,
      lineHeight: 24,
      letterSpacing: 0.38,
      color: color.white,
    },
    sliderDescriptionText: {
      fontSize: 13,
      lineHeight: 24,
      letterSpacing: -0.08,
      color: color.white_70,
    },
    optionContainer: {
      width: '90%',
      height: 60,
      borderRadius: 14,
      backgroundColor: color.white_8,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: color.white_24,
      marginVertical: 10,
    },
    selectedContainer: {
      borderColor: color.green,
      borderWidth: 1.5
    },
    bullet: {
      width: 24,
      height: 24,
      borderRadius: 24,
      backgroundColor: color.white_15,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 16,
    },
    bulletGreen: {
      backgroundColor: color.green,
    },
    selectedBullet: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: color.white,
    },
    optionText: {
      fontSize: 16,
      lineHeight: 18.96,
      color: color.white,
    },
    optionDescription: {
      fontSize: 12,
      lineHeight: 14.22,
      color: color.white_70,
    },
    badge: {
      width: 77,
      height: 26,
      right: -50,
      top: -16,
      borderTopRightRadius: 14,
      borderBottomLeftRadius: 20,
      backgroundColor: color.green
    },
    badgeText: {
      color: color.white,
      padding: 6,
      paddingLeft: 10,
      fontSize:12 
    },
    buttonContainer:{
      width: '90%',
      paddingVertical: 16
    },
    legal:{
      color: color.white_52,
      fontSize: 9,
      marginBottom: 10,
      width:  '90%',
    },
    termsPrivacyRestore:{
      color: color.white_50,
      fontSize: 11,
      marginBottom: 10,
      width:  '90%',
      textAlign: 'center'
    },
  });
};
