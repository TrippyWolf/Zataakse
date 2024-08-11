import {createContext} from 'react';

import ThemeName from './ThemeName';

/**
 * Stores the currently selected theme for a component tree in a React Context.
 *
 * Defaults to Light theme for child components in the component tree when no matching `<ThemeNameProvider>`
 * is found in the upper levels of the tree.
 */
const ThemeNameContext = createContext<ThemeName>(ThemeName.LIGHT);

export default ThemeNameContext;
