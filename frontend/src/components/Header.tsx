import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Tabs, Tab } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/Header.css';

const Header : React.FC = () => {
  return (
    <div>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <div className="right-nav">
            <Typography color="inherit" variant="h6">
              <Link className="link" to="/">Top</Link>
            </Typography>
            <Typography color="inherit" variant="h6">
              <Link className="link" to="/chart">Chart</Link>
            </Typography>
            <Typography color="inherit" variant="h6">
              <Link className="link" to="/upload">Upload</Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
