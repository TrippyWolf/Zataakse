import selectThemeConfiguration from './selectThemeConfiguration';
import ThemeName from './ThemeName';
import useThemeNameContext from './useThemeNameContext';

/**
 * Retrieves the matching theme configuration using the theme name value from the theme Context Hook.
 * @param themeConfigurations Object of configuration objects per theme. Defaults to **empty object**: `{}`.
 * @returns A configuration object based on theme.
 * @deprecated
 * use `useTheme.ts` as a replacement
 */
const useThemeContext = <LightThemeConfiguration, DarkThemeConfiguration>(
  themeConfigurations: {
    [ThemeName.LIGHT]?: LightThemeConfiguration;
    [ThemeName.DARK]?: DarkThemeConfiguration;
  } = {},
) => {
  const themeName = useThemeNameContext();
  const themeConfiguration = selectThemeConfiguration(
    themeName,
    themeConfigurations,
  );

  return themeConfiguration;
};

export default useThemeContext;
