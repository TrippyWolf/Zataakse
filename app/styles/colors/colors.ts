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

  ['background-main']: string;

  /**
   * Content Primary - Main (default) color for typography across the app; text
   */
  ['content-primary']: string;
  /**
   * Content Secondary - Used as a secondary color for typography across the app. For example, paragraphs, labels in inputs, placeholders.
   */
  ['content-secondary']: string;

  /**
   * Content Secondary Alt - Used to indicate secondary content color on reverse of background-primary. Can be used in dark backgrounds.
   */
  ['content-secondary-alt']: string;

  /**
   * Content green - Uses to indicate black color that would not change regardless of theme.
   */
  ['content-green']: string;

  ['border-primary']: string;
};

export type ColorToken = keyof Colors;
