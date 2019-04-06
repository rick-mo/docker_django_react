import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ChartPage from './chart/ChartPage';
import UploadPage from './UploadPage';
import NotExistPage from './NotExistPage';
import TopPage from './TopPage';
import LoginPage from './LoginPage';
import SampleChart from './SampleChart';
import Auth from './Auth';

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

interface Props extends WithStyles<typeof styles>{
  isLogged: boolean;
  setLogged: (isLogged: boolean) => void;
}

const Contents: React.FC<Props> = (props: Props) => {
  const { classes, isLogged, setLogged } = props;

  return (
    <div className={classes.content}>
      <Switch>
        <Route path="/rechart" exact component={SampleChart} />
        <Route path="/login" exact render={() => <LoginPage setLogged={setLogged} isLogged={isLogged} />} />
        <Auth isLogged={isLogged}>
          <Switch>
            <Route path="/" exact component={TopPage} />
            <Route path="/chart" exact component={ChartPage} />
            <Route path="/upload" exact component={UploadPage} />
            <Route exact component={NotExistPage} />
          </Switch>
        </Auth>
      </Switch>
    </div>
  );
};

export default withStyles(styles)(Contents);
