import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import { blue, grey } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChartPage from './chart/ChartPage';
import UploadPage from './UploadPage';
import NotExistPage from './NotExistPage';
import TopPage from './TopPage';
import Header from './Header';
import LoginPage from './LoginPage';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[50],
      dark: blue[100]
    },
    secondary: {
      light: grey[500],
      main: grey[900],
      dark: grey[900]
    }
  }, 
  typography: {
    useNextVariants: true,
  },
});

const styles = (theme: Theme) => ({
  content: {
    displey: 'flex',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const App: React.FC<WithStyles<typeof styles>> = (props) => {
  const { classes } = props;
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <Header />
          <div className={classes.content}>
            <Switch>
              <Route path="/" exact component={TopPage} />
              <Route path="/chart" exact component={ChartPage} />
              <Route path="/upload" exact component={UploadPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route exact component={NotExistPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(App);
