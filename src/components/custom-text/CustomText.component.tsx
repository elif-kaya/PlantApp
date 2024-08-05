import React from 'react';

import { Text, StyleProp, TextStyle } from 'react-native';

import { getStyles } from './CustomText.style';

interface CustomTextComponentProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  weight: '400'| '500' | '600' | '700' | '800';
  boldTextArray?: Array<{ index: number; weight: '400' | '500' | '600' | '700' | '800' }>;

}

export const CustomTextComponent = ({
  children,
  style,
  numberOfLines,
  weight,
  boldTextArray=[], 



}: CustomTextComponentProps): React.JSX.Element => {
  const styles = getStyles(weight);
  const text = typeof children === 'string' ? children : '';
  const words =  text.split(' ');

  return (
    <Text style={[styles.text, style]} numberOfLines={numberOfLines}>
     {words.map((word, index) => {
        // Find the custom weight for the current word index
        const customWeight = boldTextArray.find(item => item.index === index)?.weight || weight;

        return (
          <Text key={index} style={{ fontWeight: customWeight }}>
            {word}{' '}
          </Text>
        );
      })}
    </Text>
  );
};
