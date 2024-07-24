import {TextStyle, ViewStyle} from 'react-native';
import {useAppTheme} from '../../theme/theme';


/**
 * The variations of buttons.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'disabled';

/**
 * All the variations of button.
 */
export function useButtonVariants(variant: ButtonVariant) {
  const {colors} = useAppTheme();
  const variants = {
    primary: {
      outer: {
        backgroundColor: colors.green,
      } as ViewStyle,
      inner: {
        color: colors.green,
      } as TextStyle,
    },
    secondary: {
      outer: {
        backgroundColor: colors.transparent,
        borderWidth: 2,
        borderColor: colors.green,
      } as ViewStyle,
      inner: {
        color: colors.transparent,
      } as TextStyle,
    },
    disabled: {
      outer: {
        backgroundColor: colors.grey3,
      } as ViewStyle,
      inner: {
        color: colors.grey1,
      } as TextStyle,
    },
  };
  return variants[variant];
}
