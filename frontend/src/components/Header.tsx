import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme) => ({
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

const Header: React.FC<WithStyles<typeof styles>> = (props) => {
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
