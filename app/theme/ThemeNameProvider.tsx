import React, {FunctionComponent, PropsWithChildren} from 'react';

import ThemeName from './ThemeName';
import ThemeNameContext from './ThemeNameContext';

interface ThemeNameProviderProps {
  // NOTE:
  // We want the identifier string of the theme only, not a whole theme object.
  // Using objects as context values is too risky to the rendering performance.
  // The React Reconciler API cannot compare objects deeply, which is simply a JS standard.
  // https://reactjs.org/docs/context.html#caveats
  /**
   * Theme name value to be shared among the child elements.
   */
  themeName: ThemeName;
}

/**
 * Context provider for the theme name. Place this at the topmost element you need the context to be
 * applied to.
 *
 * Example hierarchy:
 *
 * ```tsx
 * <ThemeNameProvider themeName={ThemeName.LIGHT}>
 * 	<ThemedRoot>
 * 		<ThemedView />
 * 		<Intermediate>
 * 			<Intermediate>
 * 				<ThemedView />
 * 			</Intermediate>
 * 		</Intermediate>
 * 	</ThemedRoot>
 * </ThemeNameProvider>
 * ```
 *
 * @param props An object containing `themeName`. See `ThemeNameProviderProps`.
 * @returns The children wrapped with the theme name context. `null` if no children were provided.
 */
const ThemeNameProvider: FunctionComponent<
  PropsWithChildren<ThemeNameProviderProps>
> = props => {
  if (!props.children) {
    return null;
  }

  // If the parent passes a `null` or `undefined` value for some reason not covered in this scope,
  // e.g.: it's via a remote feature flag service but the service is unreachable or misconfigured,
  // the fallback is the LIGHT theme so that all components, especially those baked into MLDS lib,
  // will continue to have a matching theme style.
  const value = props.themeName ?? ThemeName.LIGHT;

  return (
    <ThemeNameContext.Provider value={value}>
      {props.children}
    </ThemeNameContext.Provider>
  );
};

export default ThemeNameProvider;
