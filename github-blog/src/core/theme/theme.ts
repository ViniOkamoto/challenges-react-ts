export const defaultTheme = {
  color: {
    white: '#FFFFFF',
    'base-title': '#E7EDF4',
    'base-subtitle': '#C4D4E3',
    'base-text': '#AFC2D4',
    'base-label': '#3A536B',
    'base-span': '#7B96B2',
    'base-border': '#1C2F41',
    'base-post': '#112131',
    'base-profile': '#0B1B2B',
    'base-background': '#071422',
    'base-input': '#040F1A',

    blue: '#3294F8',
  },

  typography: {
    'line-height-130': '130%',
    'line-height-160': '160%',
    font: {
      'font-family': "'Nunito', sans-serif",
      weight: {
        bold: '700',
        regular: '400',
      },
    },
    title: {
      l: '1.5rem',
      m: '1.25rem',
      s: '1.125rem',
    },
    text: {
      m: '1rem',
      s: '0.875rem',
      link: '0.75rem',
    },
  } as const,
} as const

export type ColorType = keyof typeof defaultTheme.color

export type AppFontWeightType = keyof typeof defaultTheme.typography.font.weight
