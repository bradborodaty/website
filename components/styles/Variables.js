const sizepx = {
  xsmall: "320px",
  small: "640px",
  medium: "960px",
  large: "1200px",
  xlarge: "1600px"
};

export const screenSizeMin = {
  xsmallScreen: `(min-width: ${sizepx.xsmall})`,
  smallScreen: `(min-width: ${sizepx.small})`,
  mediumScreen: `(min-width: ${sizepx.medium})`,
  largeScreen: `(min-width: ${sizepx.large})`,
  xlargeScreen: `(min-width: ${sizepx.xlarge})`
};

export const screenSizeMax = {
  xsmallScreen: `(max-width: ${sizepx.xsmall})`,
  smallScreen: `(max-width: ${sizepx.small})`,
  mediumScreen: `(max-width: ${sizepx.medium})`,
  largeScreen: `(max-width: ${sizepx.large})`,
  xlargeScreen: `(max-width: ${sizepx.xlarge})`
};


export const fonts = {
  size: '16px',
  family: "'Muli', sans-serif",
  weight: '400',
}