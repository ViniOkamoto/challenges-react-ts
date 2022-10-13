export const defaultTheme = {
  color: {
    white: '#fff',

    'gray-100': '#E1E1E6',
    'gray-300': '#C4C4CC',
    'gray-400': '#8D8D99',
    'gray-500': '#7C7C8A',
    'gray-600': '#323238',
    'gray-700': '#29292E',
    'gray-800': '#202024',
    'gray-900': '#121214',

    'green-300': '#00B37E',
    'green-500': '#00875F',
    'green-700': '#015F43',

    'red-300': '#F75A68',
    'red-500': '#AB222E',
    'red-700': '#7A1921',
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
    sizes: {
      xl: '2rem',
      l: '1.5rem',
      m: '1.25rem',
      s: '1rem',
      xs: '0.875rem',
    },
  } as const,
} as const

export type ColorType = keyof typeof defaultTheme.color

export type RobotoFontWeightType =
  keyof typeof defaultTheme.typography.font.weight
