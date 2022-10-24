import {
  createTheme,
  PaletteColorOptions,
  PaletteColor,
  Color,
} from '@mui/material'
type ColorPartial = Partial<Color>
declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends ColorPartial {}
}
declare module '@mui/material/styles' {
  interface PaletteOptions {
    gammaHigh: PaletteColorOptions
    gammaMedium: PaletteColorOptions
    gammaLow: PaletteColorOptions
    gammaButtonText: PaletteColorOptions
    gammaWhite: PaletteColorOptions
    green: PaletteColorOptions
    red200: PaletteColorOptions
    red500: PaletteColorOptions
  }

  interface Palette {
    gammaHigh: PaletteColor
    gammaMedium: PaletteColor
    gammaLow: PaletteColor
    gammaButtonText: PaletteColor
    gammaWhite: PaletteColor
    green: PaletteColor
    red200: PaletteColor
    red500: PaletteColor
  }

  interface TypographyVariants {
    body: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    title: React.CSSProperties
    gammaRegular: React.CSSProperties
    captionRegular:React.CSSProperties
    overline2: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body?: React.CSSProperties
    caption1?: React.CSSProperties
    caption2?: React.CSSProperties
    title?: React.CSSProperties
    gammaRegular?: React.CSSProperties
    captionRegular?:React.CSSProperties
    overline2?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true
    caption1: true
    caption2: true
    title: true
    gammaRegular: true
    captionRegular:true
    overline2:true
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsSizeOverrides {
    large: true
    extraLarge: true
  }

  interface ChipClasses {
    sizeLarge: true
    sizeExtraLarge: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gammaHigh: true
    gammaMedium: true
    gammaLow: true
    gammaButtonText: true
    gammaWhite: true
    red500: true
    green: true
    red200: true
  }
  interface ButtonClasses {
    textText1: string
  }
}

let theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      '50': '#F2F5FF',
      '100': '#C6CEF7',
      '300': '#9191F2',
      '500': '#6B4DE0',
      '800': '#4D1C8C',
      main: '#6B4DE0',
    },
    secondary: {
      A100: '#EBDAF2',
      '500': '#C898D9',
      '800': '#9E62B3',
      '50': '#F9F5FA',
      A400: '#9E62B2',
    },
    grey: {
      '50': '#F8F8FA',
      '100': '#E9E8ED',
      '200': '#D4D2D9',
      '300': '#9F9DA6',
      '500': '#6D6C73',
      '700': '#3C3B40',
    },
    gammaHigh: {
      main: '#2D2A38',
    },
    gammaMedium: {
      main: '#5A5766',
    },
    gammaLow: {
      main: '#757380',
    },
    gammaButtonText: {
      main: '#FAFAFC',
    },
    gammaWhite: {
      main: '#FFFFFF',
    },
    red200: {
      main: '#FC5C5C',
    },
    red500: {
      main: '#DA4D4D',
    },
    green: {
      main: '#4D8066',
    },
  },

  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    title: {
      fontFamily: 'Inter',
      fontSize: '48px',
      lineHeight: '52px',
      fontWeight: '500',
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'Inter',
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 700,
      textTransform: 'none',
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '24px',
      lineHeight: '38px',
      fontWeight: '400',
      textTransform: 'none',
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: '600',
      textTransform: 'none',
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: '800',
      textTransform: 'none',
    },
    body: {
      fontFamily: 'Inter',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 600,
      textTransform: 'none',
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '500',
      textTransform: 'none',
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '400',
      textTransform: 'none',
    },
    caption1: {
      fontFamily: 'Inter',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '700',
      textTransform: 'none',
    },
    caption2: {
      fontFamily: 'Inter',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '500',
      textTransform: 'none',
    },
    captionRegular:{
      fontFamily: 'Inter',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
      textTransform: 'none',
    },
    button: {
      fontFamily: 'Inter',
      fontSize: '18px',
      lineHeight: '20px',
      fontWeight: '700', 
      textTransform: 'none',
    },
    overline: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
      textTransform: 'none',
    },
    overline2: {
      fontFamily: 'Inter',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '500',
      textTransform: 'none',
    },
  },
})

const shadows = theme.shadows
shadows[1] = '0px 0px 26px rgba(233, 232, 237, 0.5)'
shadows[2] = '0px -4px 6px rgba(0, 0, 0, 0.06)'
shadows[3] = '0px 0px 12px rgba(233, 232, 237, 0.53)'

theme = createTheme({ ...theme, shadows })
export default theme
