import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, IconButton, Menu, MenuItem,
} from '@material-ui/core/';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = (theme: Theme): StyleRules => createStyles({
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
  right_nav: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

interface Props extends WithStyles<typeof styles>{
  isLogged: boolean;
  setLogged: (isLogged: boolean) => void;
}

const Header: React.FC<Props> = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { classes, isLogged, setLogged } = props;
  const isOpen = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setLogged(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link className={classes.link} to="/">Top</Link>
        </Typography>
        {isLogged
          ? (
            <div className={classes.right_nav}>
              <Typography variant="h6">
                <Link className={classes.link} to="/chart">Chart</Link>
              </Typography>
              <Typography variant="h6">
                <Link className={classes.link} to="/upload">Upload</Link>
              </Typography>
              <div>
                <IconButton
                  onClick={e => setAnchorEl(e.currentTarget)}
                  aria-haspopup="true"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  open={isOpen}
                  anchorEl={anchorEl}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem><Link to="/rechart">Rechart</Link></MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          )
          : (
            <div className={classes.right_nav}>
              <Typography variant="h6">
                <Link className={classes.link} to="/login">Login</Link>
                <Link to="/rechart">Rechart</Link>
              </Typography>
            </div>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
