import React, { ComponentType } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blue, grey } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[50],
      dark: blue[100],
    },
    secondary: {
      light: grey[500],
      main: grey[900],
      dark: grey[900],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const withRoot = function<P> (Component: ComponentType<P>) {
  const WithRoot = (props: P) => (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  );

  return WithRoot;
};

export default withRoot;
