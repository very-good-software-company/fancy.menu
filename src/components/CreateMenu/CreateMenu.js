import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddItem from '../AddItem';
import AddSection from '../AddSection';
import PreviewMenu from '../PreviewMenu';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import SectionAccordian from '../SectionAccordian';
import localforage from 'localforage';

const CreateMenu = ({ menuCreate }) => {

  console.log('render create menu');
  const [menu, setMenu] = useState({name: '', sections: []});
  const [itemCreated, setItemCreated] = useState(false);
  const [menuName, setMenuName] = useState('');

  useEffect(()=> {
    getLocalStorage();
    return ()=>{};
  }, []);

  const setLocalStorage = (aMenu) => {

    localforage.setItem('menu', aMenu).then(()=> {}).catch(err => {
        console.log('cannont set local storage ',err);
    });
    
    setMenu(aMenu)

  }

  const getLocalStorage = () => {

    localforage.getItem('menu').then(function(value) {
      
        console.log(value);

      if(value != null){
        
          setMenu(value);

          setMenuName(value.name)

          if(value.sections && value.sections.length){
            if(value.sections[0].items && value.sections[0].items.length){
              setItemCreated(true);
            }
          }
        
      }

    }).catch(function(err) {
  
        console.log(err);
    });
  }

  const createMenu = () => {
    menuCreate(menu);
  }
  
  const itemCreate = (item, sectionIndex) => {


    const sectionItems = menu.sections[sectionIndex].items;

    const itemsArr = [
      ...sectionItems,
      item
    ];

    menu.sections[sectionIndex].items = itemsArr;

    const sectionArr = [
      ...menu.sections
    ];

    setLocalStorage({ ...menu, sections: sectionArr })
    setItemCreated(true);

  }

  const itemUpdate = (item, sectionIndex, itemIndex) => {


    const sectionItems = menu.sections[sectionIndex].items;

    sectionItems[itemIndex] = item;

    const itemsArr = [
      ...sectionItems
    ];

    menu.sections[sectionIndex].items = itemsArr;

    const sectionArr = [
      ...menu.sections
    ];

    setMenu({ ...menu, sections: sectionArr });
    setLocalStorage()
  }

  const sectionUpdate = (section, sectionIndex) => {

    menu.sections[sectionIndex] = section;

    const newArr = [
      ...menu.sections
    ];

    setLocalStorage({ ...menu, sections: newArr })
  }


  const sectionCreate = (section) => {

    const newArr = [
      ...menu.sections,
      section
    ];
    
    setLocalStorage({ ...menu, sections: newArr })
  }

  const menuNameChange = (e) => {
    e.preventDefault();
    let tempMenu = {sections: []};
    if(menu != null){
      tempMenu = menu;
    }
    
    tempMenu.name = e.target.value;
    setMenuName(e.target.value);
    setMenu(tempMenu);
    
  }

  const deleteSection = (sectionIndex) => {

    let newArr
    if(menu.sections.length > 1){
      newArr = menu.sections.splice(sectionIndex, 1);
    } else {
      newArr = [];
    }

    setLocalStorage({ ...menu, sections: newArr })

  }

  const useStyles = makeStyles(theme => ({
    container: {
      height: 'calc(100vh - 80px)'
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    half: {
      padding: '32px',
      overflowY: 'auto',
      height: '100%'
    }
  }));

  const classes = useStyles();
  
  return (
    <Grid container className={classes.container}>
      <Grid item xs={6} className={classes.half}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MenuBookIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Create a menu!
          </Typography>
          
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="menuName"
              label="Menu Name"
              name="menuName"
              autoFocus
              onChange={menuNameChange}
              value={menuName}
            />          

          {menu && menu.name && menu.name != null && menu.name.length > 3 && (

            <AddSection sectionCreate={sectionCreate}/> 

          )}
          {menu && menu.sections && menu.sections.length > 0 && (
            <>
              <AddItem itemCreate={itemCreate} menuSections={menu.sections}/> 
              <SectionAccordian sections={menu.sections} setItem={itemUpdate} setSection={sectionUpdate} />
            </>
          )}
          {itemCreated && (
            <Button
              onClick={createMenu}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<LibraryAddCheckIcon />}
            > Create Menu
            </Button>  
          )}
        </div>
      </Grid>

      {menu && menu.name && (
        
        <Grid item xs={6} className={classes.half}>
          <PreviewMenu menu={menu} deleteSection={deleteSection}/>
        </Grid>
      )}

      
    </Grid>
  );
}

export default CreateMenu;