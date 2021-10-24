//tailwind border color plugin powered by
//https://github.com/tailwindcss/tailwindcss/pull/560#issuecomment-503222143
var _ = require('lodash')
var flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default


module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px'
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      'post': '1 1 300px',
      '100': '1 1 100%',
      'post-large-content': '0 1 361px',
    },
    zIndex: {
      '-10': '-10',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      '1000': 1000,
      'auto': 'auto',
    },
    corePlugins: {
      container: false
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#f9fafb",
        100: "#F7FAFC",
        200: "#EDF2F7",
        300: "#E2E8F0",
        400: "#CBD5E0",
        500: "#A0AEC0",
        600: "#718096",
        700: "#4A5568",
        800: "#2D3748",
        900: "#1A202C",
      },
      red: {
        50: "#fdf2f2",
        100: "#FFF5F5",
        200: "#FED7D7",
        300: "#FEB2B2",
        400: "#FC8181",
        500: "#F56565",
        600: "#E53E3E",
        700: "#C53030",
        800: "#9B2C2C",
        900: "#742A2A",
      },
      orange: {
        50: "#fff8f1",
        100: "#feecdc",
        200: "#fcd9bd",
        300: "#fdba8c",
        400: "#ff8a4c",
        500: "#ff5a1f",
        600: "#d03801",
        700: "#b43403",
        800: "#8a2c0d",
        900: "#73230d",
      },
      yellow: {
        50: "#fdfdea",
        100: "#fdf6b2",
        200: "#fce96a",
        300: "#faca15",
        400: "#e3a008",
        500: "#c27803",
        600: "#9f580a",
        700: "#8e4b10",
        800: "#723b13",
        900: "#633112",
      },
      green: {
        50: "#f3faf7",
        100: "#def7ec",
        200: "#bcf0da",
        300: "#84e1bc",
        400: "#31c48d",
        500: "#0e9f6e",
        600: "#057a55",
        700: "#046c4e",
        800: "#03543f",
        900: "#014737",
      },
      teal: {
        50: "#edfafa",
        100: "#E6FFFA",
        200: "#B2F5EA",
        300: "#81E6D9",
        400: "#4FD1C5",
        500: "#38B2AC",
        600: "#319795",
        700: "#2C7A7B",
        800: "#285E61",
        900: "#234E52",
      },
      blue: {
        50: "#ebf5ff",
        100: "#EBF8FF",
        200: "#BEE3F8",
        300: "#90CDF4",
        400: "#63B3ED",
        500: "#4299E1",
        600: "#3182CE",
        700: "#2B6CB0",
        800: "#2C5282",
        900: "#2A4365",
      },
      indigo: {
        50: "#f0f5ff",
        100: "#e5edff",
        200: "#cddbfe",
        300: "#b4c6fc",
        400: "#8da2fb",
        500: "#6875f5",
        600: "#5850ec",
        700: "#5145cd",
        800: "#42389d",
        900: "#362f78",
      },
      purple: {
        50: "#f6f5ff",
        100: "#edebfe",
        200: "#dcd7fe",
        300: "#cabffd",
        400: "#ac94fa",
        500: "#9061f9",
        600: "#7e3af2",
        700: "#6c2bd9",
        800: "#5521b5",
        900: "#4a1d96",
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce8f3",
        200: "#fad1e8",
        300: "#f8b4d9",
        400: "#f17eb8",
        500: "#e74694",
        600: "#d61f69",
        700: "#bf125d",
        800: "#99154b",
        900: "#751a3d",
      },
    },
    extend: {
      backgroundColor: ['group-focus', 'active'],
      borderColor: ['group-focus'],
      boxShadow: ['group-focus'],
      opacity: ['group-focus'],
      textColor: ['group-focus', 'active'],
      textDecoration: ['group-focus'],
      boxShadow: {
        solid: '0 0 0 2px currentColor',
        outline: `0 0 0 3px rgba(156, 163, 175, .5)`,
        'outline-gray': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-blue': `0 0 0 3px rgba(191, 219, 254, .5)`,
        'outline-green': `0 0 0 3px rgba(167, 243, 208, .5)`,
        'outline-yellow': `0 0 0 3px rgba(253, 230, 138, .5)`,
        'outline-red': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-pink': `0 0 0 3px rgba(251, 207, 232, .5)`,
        'outline-purple': `0 0 0 3px rgba(221, 214, 254,, .5)`,
        'outline-indigo': `0 0 0 3px rgba(199, 210, 254, .5)`,
      },
      padding: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
      }
    },
    radialGradients: {
      shapes: { // defaults to this value
        'DEFAULT': 'ellipse',
      },
      sizes: { // defaults to this value
        'DEFAULT': '',
      },
      positions: { // defaults to these values
        'DEFAULT': 'center',
        't': 'top'
      },
      colors: { // defaults to {}
        'gray-to-black': ['rgba(25, 25, 25, 1)', 'rgba(8, 8, 8, 1)', 'rgba(0, 0, 0, 1)']
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1040px',
          },
        },
        '.container_tft': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1496px',
          },
        }
      })
    },
    function ({
      addUtilities,
      e,
      theme,
      variants
    }) {
      const colors = flattenColorPalette(theme('borderColor'))

      const utilities = _.flatMap(_.omit(colors, 'default'), (value, modifier) => ({

        [`.${e(`border-t-${modifier}`)}`]: {
          borderTopColor: `${value}`
        },
        [`.${e(`border-r-${modifier}`)}`]: {
          borderRightColor: `${value}`
        },
        [`.${e(`border-b-${modifier}`)}`]: {
          borderBottomColor: `${value}`
        },
        [`.${e(`border-l-${modifier}`)}`]: {
          borderLeftColor: `${value}`
        },
      }))

      addUtilities(utilities, variants('borderColor'))
    },
    function ({
      addBase,
      config
    }) {

      addBase({
        'h1': {
          fontSize: config('theme.fontSize.5xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h2': {
          fontSize: config('theme.fontSize.4xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h3': {
          fontSize: config('theme.fontSize.3xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h4': {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h5': {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
        'h6': {
          fontSize: config('theme.fontSize.lg'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4')
        },
      })
    },
    require('tailwindcss-tables')(),
    require('tailwindcss-gradients')
  ]
}