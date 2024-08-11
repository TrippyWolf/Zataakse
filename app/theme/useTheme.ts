import {useMemo} from 'react';
import useThemeNameContext from './useThemeNameContext';
import {COLORS} from '../styles/colors';
import ThemeName from './ThemeName';
import {Colors} from '../styles/colors/colors';

export interface ThemeStyles {
  colors: Colors;
}

export interface Theme<T extends (args: ThemeStyles) => unknown> {
  colors: Colors;
  styles: ReturnType<T> | undefined;
  dark: boolean;
}

type UseTheme = <T extends (args: ThemeStyles) => unknown>(
  stylesheet?: T,
) => Theme<T>;

const useTheme: UseTheme = (stylesheet?) => {
  const themeName = useThemeNameContext();
  const dark = themeName === ThemeName.DARK;
  const colors = COLORS[themeName];

  const styles = useMemo(() => {
    return stylesheet ? stylesheet({colors}) : undefined;
  }, [stylesheet, colors]);

  return {styles, colors, dark};
};

export default useTheme;
