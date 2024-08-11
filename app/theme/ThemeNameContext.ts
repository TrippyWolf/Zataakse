import {createContext} from 'react';

import ThemeName from './ThemeName';
import {ThemeNameProviderProps} from './ThemeProvider';

/**
 * Stores the currently selected theme for a component tree in a React Context.
 *
 * Defaults to Light theme for child components in the component tree when no matching `<ThemeNameProvider>`
 * is found in the upper levels of the tree.
 */
const ThemeNameContext = createContext<ThemeNameProviderProps>({
  themeName: ThemeName.LIGHT,
  toggleTheme: () => {},
});

export default ThemeNameContext;
