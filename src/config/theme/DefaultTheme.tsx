import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#808080',
    secondary: '#000',
    terciary: 'rgba(255, 255, 255, 0.87)',
    quartiary: '#c1c1c1'
  },
};

interface DefaultThemeProps {
  children: React.ReactNode;
}

function DefaultTheme({ children }: DefaultThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default DefaultTheme;
