import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Auth } from '../../state/auth';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ history }) => {
  const { logout } = Auth.useContainer();
  const classes = useStyles();


  const home = () => {
    history.push('/');
  }

  return (
    <nav>

      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
            
            <Typography variant="h6" className={classes.title} onClick={home}>
                  Fancy Menu
            </Typography>
            
          {/* <Button color="inherit" onClick={logout}>Logout</Button> */}
          <Button
            color="inherit"
            className={classes.button}
            startIcon={<ExitToAppIcon />}
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
     
    </nav>
  );
}

export default withRouter(Navbar);