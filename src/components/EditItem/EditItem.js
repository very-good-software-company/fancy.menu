import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const EditItem = ({ item, setItem }) => {

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    }
  }));

  const classes = useStyles();
  const [tempItem, setTempItem] = useState(item);

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

  return (
    <Grid container >
      <Grid item xs={12}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          Edit Item
          </Typography>
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
        </div>
      </Grid>
     </Grid>
  );
}

export default EditItem;