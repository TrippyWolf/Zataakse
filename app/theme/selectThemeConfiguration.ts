import ThemeName from './ThemeName';

const selectThemeConfiguration = <
  LightThemeConfiguration,
  DarkThemeConfiguration,
>(
  themeName: ThemeName,
  themeConfigurations: {
    [ThemeName.LIGHT]?: LightThemeConfiguration;
    [ThemeName.DARK]?: DarkThemeConfiguration;
  } = {},
) => {
  const selectedKey = themeName;
  const selectedConfiguration = themeConfigurations[selectedKey];

  return selectedConfiguration;
};

export default selectThemeConfiguration;
