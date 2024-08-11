import {useMemo} from 'react';
import useThemeNameContext from './useThemeNameContext';
import {COLORS} from '../styles/colors';
import {Colors} from '../styles/colors/colors';

export interface ThemeStyles {
  colors: Colors;
}

export interface Theme<T extends (args: ThemeStyles) => unknown> {
  colors: Colors;
  styles: ReturnType<T>;
}

type UseTheme = <T extends (args: ThemeStyles) => unknown>(
  stylesheet?: T,
) => Theme<T>;

const useTheme: UseTheme = (stylesheet?) => {
  const {themeName} = useThemeNameContext();
  const colors = COLORS[themeName];
  let styles;
  if (stylesheet) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    styles = useMemo(
      () => stylesheet({colors: COLORS[themeName]}),
      [stylesheet, themeName],
    );
  }

  return {styles, colors};
};

export default useTheme;
