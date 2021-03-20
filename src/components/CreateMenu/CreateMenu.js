import React, { useState } from 'react';
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

const CreateMenu = ({ menuCreate }) => {

  const [menuName, setMenuName] = useState(null);
  const [menuSections, setMenuSections] = useState([]);
  const [menu, setMenu] = useState(null);
  
  const itemCreate = (item, sectionIndex) => {

    const sectionItems = menuSections[sectionIndex].items;

    const itemsArr = [
      ...sectionItems,
      item
    ];

    menuSections[sectionIndex].items = itemsArr;

    const sectionArr = [
      ...menuSections
    ];

    setMenuSections(sectionArr);
    setMenu({ ...menu, sections: sectionArr });

  }

  const sectionCreate = (section) => {

    const newArr = [
      ...menuSections,
      section
    ];

    setMenuSections(newArr);
    setMenu({ ...menu, sections: newArr });

  }

  const menuNameChange = (e) => {
    e.preventDefault();
    let tempMenu = {sections: [], change:false};
    if(menu != null){
      tempMenu = menu;
    }
    
    tempMenu.name = e.target.value;
    setMenu(tempMenu);

    setMenuName(e.target.value);

  }

  const useStyles = makeStyles(theme => ({
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
      padding: '32px'
    }
  }));

  const classes = useStyles();

  return (
    <Grid container >
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
            />          

          {menuName != null && menuName.length > 3 && (

            <AddSection sectionCreate={sectionCreate}/> 

          )}
          {menuSections.length > 0 && (

            <AddItem itemCreate={itemCreate} menuSections={menuSections}/> 

          )}
        </div>
      </Grid>

      {menu != null && (
        
        <Grid item xs={6} className={classes.half}>
          <PreviewMenu menu={menu} />
        </Grid>
      )}

      
    </Grid>
  );
}

export default CreateMenu;