import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Box from '../Box';
import Text from '../Text';
import {ButtonProps} from './types';
import {useAppTheme} from '../../theme/theme';

export const Button = ({
  title,
  disabled,
  loading,
  onPress,
  alignSelf,
  variant = "primary",
  style,
  textProps,
  backgroundColor,
  color = 'white',
  left,
  right,
  borderRadius,
  ...props
}: ButtonProps) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
      <Box
        padding="space-16"
        marginVertical="space-8"
        backgroundColor={backgroundColor}
        borderRadius='space-12'
        alignItems="center"
        alignSelf={alignSelf}
        paddingHorizontal={alignSelf ? 'space-24' : 'none'}
        paddingVertical={alignSelf ? 'space-8' : 'space-16'}
        style={[
          style,
          !!backgroundColor ? {backgroundColor: colors?.[backgroundColor]} : {},
        ]}
        {...props}>
        {loading ? (
          <ActivityIndicator color={colors[color]} />
        ) : (
          <Box style={left || right ? {flexDirection: "row", gap: 10} : {}}>
            {left}
            <Text
              variant="subtext-regular"
              color={color}
              style={[!!color ? {color: colors?.[color]} : {}]}
              {...textProps}
            >
              {title}
            </Text>
            {right}
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );
};
