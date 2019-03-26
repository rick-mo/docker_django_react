import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ChartPage from './chart/ChartPage';
import UploadPage from './UploadPage';
import NotExistPage from './NotExistPage';
import TopPage from './TopPage';
import Header from './Header';
import LoginPage from './LoginPage';
import withRoot from '../withRoot';

const styles = (theme: Theme): StyleRules => createStyles({
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

interface Props extends WithStyles<typeof styles>{};

const App: React.FC<Props> = (props: Props) => {
  const { classes } = props;
  
  return (
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
  );
};

export default withRoot(withStyles(styles)(App));
