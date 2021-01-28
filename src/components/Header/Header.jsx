import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import { makeStyles } from '@material-ui/core/styles';
// import styles from './style';

const Header = () => {
  // const classes = makeStyles(styles)();

  return (
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
    </div>
  );
};

export default Header;
