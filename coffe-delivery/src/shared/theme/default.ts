export const defaultTheme = {
  color: {
    backgrorund: '#FAFAFA',
    white: '#FFFFFF',
    'base-title': '#272221',
    'base-subtitle': '#403937',
    'base-text': '#574F4D',
    'base-label': '#8D8686',
    'base-hover': '#D7D5D5',
    'base-button': '#E6E5E5',
    'base-input': '#EDEDED',
    'base-card': '#F3F2F2',

    'purple-dark': '#4B2995',
    'purple-default': '#8047F8',
    'purple-light': '#EBE5F9',

    'yellow-dark': '#C47F17',
    'yellow-default': '#DBAC2C',
    'yellow-light': '#F1E9C9',
  },
  typography: {
    'line-height-130': '130%',
    'line-height-160': '160%',
    roboto: {
      'font-family': "'Roboto', san-serif",
      weight: {
        bold: '700',
        regular: '400',
      },
    },
    baloo: {
      'font-family': "'Baloo 2', cursive",
      weight: {
        bold: '700',
        extraBold: '800',
      },
    },
    title: {
      xl: '3em',
      l: '2em',
      m: '1.5em',
      s: '1.25em',
      xs: '1.125em',
    },
    text: {
      xl: '1.25em',
      l: '1.25em',
      m: '1em',
      s: '0.875em',
      xs: '0.75em',
    },
    components: {
      tag: '0.625em',
      buttonG: '0.875em',
      buttonS: '0.75em',
    },
  },
} as const

export type ColorType = keyof typeof defaultTheme.color
