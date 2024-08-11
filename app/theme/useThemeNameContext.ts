import {useContext} from 'react';

import ThemeNameContext from './ThemeNameContext';

/**
 * Retrieves the theme name value from the theme Context.
 *
 * ----
 * **NOTE:** Barebones Hook implementation!
 *
 * Use this Hook as an escape hatch only when `useThemeContext` cannot provide the functionality you
 * require. Instead, try `useThemeContext` instead which does most of the work for you.
 *
 * ----
 * @returns The theme name assigned to the context.
 */
const useThemeNameContext = () => useContext(ThemeNameContext);

export default useThemeNameContext;
