import React from 'react';
import ThemeNameProvider from '../../theme/ThemeNameProvider';
import ThemeName from '../../theme/ThemeName';

const AppThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  // const themeColor =  useSelector(appThemeMainSelector);

  return (
    <ThemeNameProvider themeName={ThemeName.LIGHT}>
      {children}
    </ThemeNameProvider>
  );
};

export default AppThemeProvider;
