import React, {FunctionComponent, PropsWithChildren, useState} from 'react';

import ThemeName from './ThemeName';
import ThemeNameContext from './ThemeNameContext';

export interface ThemeNameProviderProps {
  /**
   * Theme name value to be shared among the child elements.
   */
  themeName: ThemeName;
  toggleTheme: () => void;
}

const ThemeProvider: FunctionComponent<PropsWithChildren> = props => {
  if (!props.children) {
    return null;
  }
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  const value = darkTheme ? ThemeName.DARK : ThemeName.LIGHT;

  return (
    <ThemeNameContext.Provider value={{themeName: value, toggleTheme}}>
      {props.children}
    </ThemeNameContext.Provider>
  );
};

export default ThemeProvider;
