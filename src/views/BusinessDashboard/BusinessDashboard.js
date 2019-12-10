import React, { useEffect, Fragment } from 'react';
import { Business } from '../../state/business';
import { Auth } from '../../state/auth';
import { Menus } from '../../state/menus';
import { db } from '../../firebase';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';

import BusinessIcon from '@material-ui/icons/Business';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const BusinessDashboard = ({ history }) => {
  const { user } = Auth.useContainer();
  const { business, businessLoading, initBusinessListener } = Business.useContainer();
  const { menus, menusLoading, initMenusListener } = Menus.useContainer();
  

  useEffect(() => {
    initBusinessListener();
  }, []);

  const submitBusiness = e => {
    e.preventDefault();

    db.collection('businesses')
    .add({
      name: e.target.businessName.value,
      owner: user.uid,
    })
    .catch(console.log);
  }

  const menuCreate = e => {
    e.preventDefault();

    db.collection('businesses')
    .doc(business.id)
    .collection('menus')
    .add({
      title: e.target.menuName.value,
    })
    .catch(console.log);
  }

  const deleteMenu = menuId => {
    if(window.confirm('Are you sure you wanna delete this guy and stuff?!?!?!')) {
      db.collection('businesses')
      .doc(business.id)
      .collection('menus')
      .doc(menuId)
      .delete()
      .catch(console.log);
    }
  }

  const deleteBusiness = () => {
    
    if(window.confirm("Are you sure you want to delete your business?")){
      db.collection('businesses')
      .doc(business.id)
      .delete();
    }

  }


  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
      { businessLoading && (
        <Slide direction="right" in={businessLoading }>
          <div>Business is Loading...</div>
        </Slide>
        
      ) }

      { !businessLoading && business && (
        <>
        
          
          <Typography component="h1" variant="h3">
            { business.name }
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<DeleteIcon />}
            onClick={deleteBusiness}
          >
            Delete
          </Button>
          

          { menusLoading && <div>Loading Menus...</div> }

          { !menusLoading && menus.length > 0 && (
            <>
                { menus.map(menu => {
                    return (
                        <Container component="main" maxWidth="xs" key={menu.id}>
                        {/* <Fragment key={menu.id}> */}
                          
                            <Typography component="h1" variant="h5">
                              { menu.title }
                            </Typography>
                            
                            <Button
                              variant="contained"
                              color="secondary"
                              className={classes.button}
                              endIcon={<DeleteIcon />}
                              onClick={() => deleteMenu(menu.id)}
                            >
                              Delete
                            </Button>
                          
                        {/* </Fragment> */}
                      </Container>
                    );
                  }) }
            </>
          ) }



          { !menusLoading && menus.length < 1 && (
            <>
            <Slide direction="right" in={!menusLoading && menus.length < 1}>
             <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <MenuBookIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                  Create a menu!
                  </Typography>
                  <form className={classes.form} onSubmit={menuCreate} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="menuName"
                      label="Menu Name"
                      name="menuName"
                      autoFocus
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      endIcon={<CreateIcon />}
                    >
                      Create Menu
                    </Button>

                    
                  </form>
                </div>
        
              </Container>
              </Slide>
            </>
          ) }
        </>
      ) }

      { !businessLoading && !business && (
        <>

          <Slide direction="right" in={!businessLoading && !business}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <BusinessIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Business
              </Typography>
              <form className={classes.form} onSubmit={submitBusiness} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="businessName"
                  label="Business Name"
                  name="businessName"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Create Business / Website
                </Button>
              </form>
            </div>
    
          </Container>
          </Slide>
        </>
      ) }
      </Container>
    </>
  );
}

export default BusinessDashboard;


