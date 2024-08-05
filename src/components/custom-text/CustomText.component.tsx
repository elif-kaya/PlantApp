import React from 'react';

import { Text, StyleProp, TextStyle } from 'react-native';

import { getStyles } from './CustomText.style';

interface CustomTextComponentProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  weight: '400'| '500' | '600' | '700' | '800';
}

export const CustomTextComponent = ({
  children,
  style,
  numberOfLines,
  weight,


}: CustomTextComponentProps): React.JSX.Element => {
  const styles = getStyles(weight);
  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
