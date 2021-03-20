import React, { useEffect } from 'react';
import { Business } from '../../state/business';
import { Auth } from '../../state/auth';
import { Menus } from '../../state/menus';
import { db } from '../../firebase';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateMenu from '../../components/CreateMenu';
import CreateBusiness from '../../components/CreateBusiness';



const BusinessDashboard = ({ history }) => {
  const { user } = Auth.useContainer();
  const { business, businessLoading, initBusinessListener } = Business.useContainer();
  const { menus, menusLoading, initMenusListener } = Menus.useContainer();
  
  useEffect(() => {
    initBusinessListener();
  }, []);

  const submitBusiness = (name, image) => {

    db.collection('businesses')
    .add({
      name: name,
      image: image,
      owner: user.uid,
    })
    .catch(console.log);
  }

  const menuCreate = e => {
    e.preventDefault();
    console.log('creating a menu');

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
    container: {
      padding: '0px 0px'
    },
    createMenu: {
      padding: '0px'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container} component="main" >
      { businessLoading && (
        <Slide direction="right" in={businessLoading }>
          <div>Business is Loading...</div>
        </Slide>
      ) }

      { !businessLoading && business && (
        <>

          {/* <BusinessCard business={business} deleteBusiness={deleteBusiness}/> */}
        
          { menusLoading && <div>Loading Menus...</div> }

          { !menusLoading && menus.length > 0 && (
            <>
                { menus.map(menu => {
                    return (
                        <Container component="main"  key={menu.id}>
                        
                          
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
                          
                        
                      </Container>
                    );
                  }) }
            </>
          ) }



          { !menusLoading && menus.length < 1 && (
            <>
              <Slide direction="right" in={!menusLoading && menus.length < 1}>
                <Container className={classes.createMenu}>

    
                  <CreateMenu menuCreate={menuCreate} />
                </Container>
              </Slide>
            </>
          ) }
        </>
      ) }

      { !businessLoading && !business && (
        <>
          <Slide direction="right" in={!businessLoading && !business}>
            <Container component="main" >
              <CreateBusiness  aSubmitBusiness={submitBusiness}/>
            </Container>
          </Slide>
        </>
      ) }
      </Container>
    </>
  );
}

export default BusinessDashboard;


