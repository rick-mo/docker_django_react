import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
import '../css/Header.css';

const Header : React.FC = () => {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Typography color="inherit" variant="h6">
            <Link className="link" to="/">Top</Link>
          </Typography>
        <div className="right-nav">
          <Typography color="inherit" variant="h6">
            <Link className="link" to="/login">Login</Link>
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
  )
}

export default Header;
