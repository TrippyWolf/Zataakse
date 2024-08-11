import {Colors, ColorToken, Gradient} from './colors';
import {COLORS_DARK} from './colorsDark';
import {COLORS_LIGHT} from './colorsLight';

export enum COLOR_SCHEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const COLORS = {
  [COLOR_SCHEME.LIGHT]: COLORS_LIGHT,
  [COLOR_SCHEME.DARK]: COLORS_DARK,
};
