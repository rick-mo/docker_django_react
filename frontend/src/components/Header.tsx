import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme): StyleRules => createStyles({
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit, 
    '&:hover': {
      color: theme.palette.secondary.light
    }
  }, 
  right_nav: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

interface Props extends WithStyles<typeof styles>{};

const Header: React.FC<Props> = (props: Props) => {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
            <Link className={classes.link} to="/">Top</Link>
          </Typography>
        <div className={classes.right_nav}>
          <Typography variant="h6">
            <Link className={classes.link} to="/login">Login</Link>
          </Typography>
          <Typography variant="h6">
            <Link className={classes.link} to="/chart">Chart</Link>
          </Typography>
          <Typography variant="h6">
            <Link className={classes.link} to="/upload">Upload</Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
