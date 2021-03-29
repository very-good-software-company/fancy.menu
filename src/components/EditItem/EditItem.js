import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditItemTags from '../EditItemTags';

const EditItem = ({ item, setItem, itemIndex, deleteItem, sectionIndex }) => {

  
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    fab: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      backgroundColor: '#e53935'
    }
  }));

  const classes = useStyles();
  const [tempItem, setTempItem] = useState(item);

  const updateTags = tags => {

    const aItem = {
      ...tempItem,
      tags: tags
    };

    setTempItem(aItem)
    setItem(aItem, aItem.sectionIndex, aItem.itemIndex);

  }


  useEffect(()=> {
    document.addEventListener('edit_tag_update', e => {
      console.log('use effect edit item : ', e.detail);
      updateTags(e.detail);
    })
    return ()=>{};
  }, []);

  

  const nameChange = e => {
    e.preventDefault();

    const aItem = {
      ...tempItem,
      name: e.target.value
    };

    setTempItem(aItem)
    setItem(aItem, aItem.sectionIndex, aItem.itemIndex);

  }
  const descriptionChange = e => {
    e.preventDefault();

    const aItem = {
      ...tempItem,
      description: e.target.value
    };

    setTempItem(aItem)
    setItem(aItem, aItem.sectionIndex, aItem.itemIndex);
  }
  const priceChange = e => {
    e.preventDefault();

    const aItem = {
      ...tempItem,
      price: e.target.value
    };

    setTempItem(aItem)
    setItem(aItem, aItem.sectionIndex, aItem.itemIndex);
  }

  const onDeleteItem = () => {

    deleteItem(sectionIndex, itemIndex);

  }

  return (
    <Grid container >
      <Grid item xs={12}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          Edit Item
          </Typography>
          <Fab size="small" color="primary" aria-label="add" className={classes.fab} onClick={onDeleteItem}>
            <DeleteForeverIcon />
          </Fab>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="itemName"
              label="Item Name"
              name="itemName"
              onChange={nameChange}
              defaultValue={tempItem.name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="itemDescription"
              label="Item Description"
              name="itemDescription"
              onChange={descriptionChange}
              defaultValue={tempItem.description}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="itemPrice"
              label="Item Price"
              name="itemPrice"
              onChange={priceChange}
              defaultValue={tempItem.price}
            />
          </form>

          <EditItemTags item={item} />
        </div>
      </Grid>
     </Grid>
  );
}

export default EditItem;