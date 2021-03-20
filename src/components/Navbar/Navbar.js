import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Auth } from '../../state/auth';
import { Business } from '../../state/business';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BusinessCard from '../../components/BusinessCard';
import { db } from '../../firebase';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    
  },
}));

const Navbar = ({ history }) => {
  const { logout } = Auth.useContainer();
  const { business, businessLoading, initBusinessListener } = Business.useContainer();
  const classes = useStyles();


  const deleteBusiness = () => {
    if(window.confirm("Are you sure you want to delete your business?")){
      db.collection('businesses')
      .doc(business.id)
      .delete();
    }
  
  }

  const home = () => {
    history.push('/');
  }

  return (
    <nav>

      <AppBar position="static" color="primary">
        <Toolbar>   
            <Typography variant="h6" className={classes.title} onClick={home}>
                  Fancy Menu
            </Typography>
            { !businessLoading && business && (
                <>
                  <BusinessCard business={business} deleteBusiness={deleteBusiness}/>
                </>
              )
            }
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