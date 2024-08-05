import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import color from 'common/color';


import { getStyles } from './Button.style';
import { CustomTextComponent } from 'components/custom-text';

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary';

export interface ButtonComponentProps extends TouchableOpacityProps {
  variant?: ButtonVariants;
  text?: string;
  children?: React.ReactNode;
  textColor?: string;
  testID?: string;
  disabled?: boolean;
  onPress(): void;
}

export const ButtonComponent = ({
  testID,
  children,
  onPress,
  text,
  variant = 'primary',
  textColor = color.green,
  disabled = false
}: ButtonComponentProps): React.JSX.Element => {
  const styles = getStyles({ textColor });

  const onPressButton = () => {
    if (disabled) {
      return;
    }
    onPress();
  };

  return (

    <TouchableOpacity
      testID={testID}
      style={styles.buttonContainer}
      onPress={onPressButton}
    >
      <View
        style={[
          variant === 'primary' && styles.innerContainerPrimary,
          variant === 'secondary' && styles.innerContainerSecondary,
          disabled && styles.innerContainerDisabled,
        ]}
      >
        {children || (
          <View
            style={[
              styles.textWrapper
            ]}
          >
            <CustomTextComponent
              style={[
                styles.text,
                variant === 'primary' && styles.textPrimary,
                variant === 'tertiary' && styles.textTertiary
              ]}
              weight={variant === 'tertiary' ? '400' : '700'}
            >
              {text}
            </CustomTextComponent>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
