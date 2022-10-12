export const defaultTheme = {
  color: {
    background: '#FAFAFA',
    white: '#FFFFFF',
    'base-title': '#272221',
    'base-subtitle': '#403937',
    'base-text': '#574F4D',
    'base-label': '#8D8686',
    'base-hover': '#D7D5D5',
    'base-button': '#E6E5E5',
    'base-input': '#EDEDED',
    'base-card': '#F3F2F2',
    'base-error': '#FF6C6C',

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
    font: {
      'font-family': "'Roboto', san-serif",
      weight: {
        bold: '700',
        regular: '400',
      },
    },
    title: {
      xl: '3rem',
      l: '2rem',
      m: '1.5rem',
      s: '1.25rem',
      xs: '1.125rem',
    },
    text: {
      l: '1.25rem',
      m: '1rem',
      s: '0.875rem',
      xs: '0.75rem',
    },
  } as const,
} as const

export type ColorType = keyof typeof defaultTheme.color

export type RobotoFontWeightType =
  keyof typeof defaultTheme.typography.font.weight
