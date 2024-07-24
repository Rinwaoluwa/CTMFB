import {TextStyle} from "react-native";
import {createTheme, useTheme} from "@shopify/restyle";
import {palette} from "./palette";
import {spacing} from "./spacing";
import {fonts} from "./fonts";
import {getComputedHeight, getComputedWidth} from "../layout/responsive";

function buildTextStyle(fontSize = 16, lineHeight = 16, style?: TextStyle) {
    return {
      fontFamily: fonts.family.mulishLight,
      fontWeight: '400',
      color: 'grey',
      fontSize: getComputedWidth(fontSize),
      lineHeight: getComputedHeight(lineHeight),
      ...style,
    };
}

const theme = createTheme({
    spacing: {...spacing},
    colors: {
        mainBackground: palette.white,
        ...palette,
    },
    fonts: {...fonts},
      borderRadii: {
        none: 0,
        'space-4': 4,
        'space-8': 8,
        'space-12': 12,
        'space-16': 16,
        'space-20': 20,
        'space-24': 24,
        'space-32': 32,
        'space-40': 40,
        'space-48': 48,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    textVariants: {
        defaults: buildTextStyle(16, 24),
        'heading-1': buildTextStyle(32, 40, {
          fontFamily: fonts.family.mulishBold,
          fontWeight: '600',
        }),
        'heading-2': buildTextStyle(24, 34, {
          fontFamily: fonts.family.mulishMedium,
          fontWeight: '600',
        }),
        'heading-3': buildTextStyle(20, 28, {
          fontFamily: fonts.family.mulishMedium,
          fontWeight: '500',
        }),
        'body-medium': buildTextStyle(16, 24, {
          fontFamily: fonts.family.mulishMedium,
          fontWeight: '400',
        }),
        'subtext-regular': buildTextStyle(14, 21),
        'caption-medium': buildTextStyle(12, 16, {
          fontWeight: '500',
          fontFamily: fonts.family.mulish,
        }),
        error: buildTextStyle(12, 16, {
          fontWeight: '500',
          fontFamily: fonts.family.mulishBold,
          color: 'red',
        }),
      },
});

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

export type Theme = typeof theme;
export type ThemeKey = keyof typeof theme;
export type Color = keyof Theme['colors'];
export type BorderRadii = keyof Theme['borderRadii'];

export default theme;
