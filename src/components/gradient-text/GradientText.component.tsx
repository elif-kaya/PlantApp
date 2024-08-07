import React from 'react';

import { Text, StyleProp, TextStyle, View } from 'react-native';

import { getStyles } from './GradientText.style';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextComponentProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  colors?: string[];
  weight?: '300' | '400'| '500' | '600' | '700' | '800';
}

export const GradientTextComponent = ({
  children,
  colors,
  weight= '400',
  style={}
}: GradientTextComponentProps): React.JSX.Element => {
  const styles = getStyles(weight);

  return (
    <View style={styles.container}>
      <LinearGradient colors={colors} style={styles.gradient}>
        <Text style={[styles.text, style]}>{children}</Text>
      </LinearGradient>
    </View>
  );
};
