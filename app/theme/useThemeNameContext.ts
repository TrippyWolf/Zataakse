import {useContext} from 'react';

import ThemeNameContext from './ThemeNameContext';

const useThemeNameContext = () => useContext(ThemeNameContext);

export default useThemeNameContext;
