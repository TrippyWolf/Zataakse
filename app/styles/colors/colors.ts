export type Gradient = {
  /**
   * Colors - Array of colors to be used in gradient.
   * @example ['#000000', '#00000099']
   */
  colors: string[];
  angle: number;
};

export type Colors = {
  /**
   * Background Primary - Our main (default) background color in the app.
   */
  ['background-primary']: string;
  /**
   * Background Secondary - Used as a container for content on top of our main background, as well as for groups of components, elevated components, dialogs, and popovers.
   */
  ['background-secondary']: string;
  /**
   * Background Tertiary - Used as background for elevated components only on top of secondary backgrounds.
   */
  ['background-tertiary']: string;
  /**
   * Background Success - Used for success screens to emphasize success states.
   */
  ['background-success']: string;
  /**
   * Background Accent - Used as background for badges, icons, and marketing content.
   */
  ['background-accent']: string;
  /**
   * Background Positive - Used as background for banners, labels and badges to convey a positive state.
   */
  ['background-positive']: string;
  /**
   * Background Warning - Used as background for banners, labels and badges to convey a cautious state.
   */
  ['background-warning']: string;
  /**
   * Background Negative - Used as background for banners, labels and badges to convey a negative state.
   */
  ['background-negative']: string;
  /**
   * Background Neutral - Used as background to make content stand out, an example of usage is as input background.
   */
  ['background-neutral']: string;
  /**
   * Background Primary Alt - Used as background on reverse color from main background content, for e.g black, an example of usage is as alt button background.
   */
  ['background-primary-alt']: string;
  /**
   * Background Purple - Used as background for banners, labels and badges for promotions & use cases mainly related to WOW.
   */
  ['background-purple']: string;
  /**
   * Content Primary - Main (default) color for typography across the app; text, links, labels, inputs, chips, tabs and more.
   */
  ['content-primary']: string;
  /**
   * Content Secondary - Used as a secondary color for typography across the app. For example, paragraphs, labels in inputs, placeholders.
   */
  ['content-secondary']: string;
  /**
   * Content Tertiary - Used as a tertiary color for typography across the app. Additional info that shouldn't be so prominent for users and doesn’t focus their attention on.
   */
  ['content-tertiary']: string;
  /**
   * Content Disabled - Used to indicate a disabled state for typography in buttons, inputs, icons and other components across the app. Users should not be able to click on components in this state.
   */
  ['content-disabled']: string;
  /**
   * Content Primary Alt - Used to indicate default content color on reverse of background-primary. Can be used in dark backgrounds.
   */
  ['content-primary-alt']: string;
  /**
   * Content Secondary Alt - Used to indicate secondary content color on reverse of background-primary. Can be used in dark backgrounds.
   */
  ['content-secondary-alt']: string;
  /**
   * Content Accent - Used to indicate accent states for typography in badges/labels, icons across the app. This might be used to highlight a specific word, phrase or component.
   */
  ['content-accent']: string;
  /**
   * Content Positive - Used to indicate positive system states for typography in badges/labels, icons across the app.
   */
  ['content-positive']: string;
  /**
   * Content Warning - Used to indicate a cautious state for typography in badges/labels, icons across the app.
   */
  ['content-warning']: string;
  /**
   * Content Negative - Uses to indicate a negative/error state for typography in badges/labels, icons across the app.
   */
  ['content-negative']: string;
  /**
   * Content Black - Uses to indicate black color that would not change regardless of theme.
   */
  ['content-black']: string;
  /**
   * Content Black secondary - Uses to indicate black color with opacity that would not change regardless of theme.
   */
  ['content-black-secondary']: string;
  /**
   * Content White - Uses to indicate white color that would not change regardless of theme.
   */
  ['content-white']: string;
  /**
   * Content White Secondary - Uses to indicate white color with opacity that would not change regardless of theme.
   */
  ['content-white-secondary']: string;
  /**
   * Border Primary - Main (default) color for border
   */
  ['border-primary']: string;
  /**
   * Border Accent - Used to indicate accent state for component. This can be used in input border to indicate the component is focused or hovered
   */
  ['border-accent']: string;
  /**
   * Border Positive - Used to indicate positive state for component.
   */
  ['border-positive']: string;
  /**
   * Border Warning - Used to indicate a cautious state for component.
   */
  ['border-warning']: string;
  /**
   * Border Negative - Used to indicate a negative/error state for component.
   */
  ['border-negative']: string;
  /**
   * Contextual Light Blue - Used to show light blue color context in the app.
   */
  ['contextual-light-blue']: string;
  /**
   * Contextual Indigo - Used to show indigo color context in the app.
   */
  ['contextual-indigo']: string;
  /**
   * Contextual Yellow - Used to show yellow color context in the app.
   */
  ['contextual-yellow']: string;
  /**
   * Contextual Medium Teal - Used to show medium teal color context in the app.
   */
  ['contextual-medium-teal']: string;
  /**
   * Contextual Perwinkle Blue - Used to show perwinkle blue color context in the app.
   */
  ['contextual-perwinkle-blue']: string;
  /**
   * Contextual Coral - Used to show coral blue color context in the app.
   */
  ['contextual-coral']: string;
  /**
   * Contextual Purple - Used to show purple blue color context in the app.
   */
  ['contextual-purple']: string;
  /**
   * Gradient Top - Used to show gradient black and white from top to bottom.
   */
  ['gradient-top']: Gradient;
  /**
   * Gradient Bottom - Used to show gradient black and white from bottom to top.
   */
  ['gradient-bottom']: Gradient;
  /**
   * Gradient Blue Green - Used to show gradient blue and green.
   */
  ['gradient-blue-green']: Gradient;
  /**
   * Gradient Skeleton - Used to show gradient skeleton color.
   */
  ['gradient-skeleton']: Gradient;
  /**
   * Overlay Default - Used to show default overlay color, e.g dialog/sheet background.
   */
  ['overlay-default']: string;
  /**
   * Overlay Light - Used to show light overlay color.
   */
  ['overlay-light']: string;
  /**
   * Overlay Dark - Used to show dark overlay color.
   */
  ['overlay-dark']: string;
};

export type ColorToken = keyof Colors;
