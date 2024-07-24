import React, { ReactNode } from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ButtonVariant} from './button.variants';
import {BorderRadii, Color} from '../../theme/theme';

export interface ButtonProps {
  title: string | React.ReactNode;
  disabled?: boolean;
  onPress?: () => {};
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: ButtonVariant;
  textProps?: any;
  backgroundColor?: Color;
  color?: Color;
  alignSelf?: "center" | "flex-end" |  "baseline" | "auto" | "flex-start" | "stretch";
  marginTop?: string;
  left?: ReactNode;
  right?: ReactNode;
  borderRadius?: BorderRadii;
}
