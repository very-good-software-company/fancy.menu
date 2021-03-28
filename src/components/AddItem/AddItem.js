import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import AddItemTags from '../AddItemTags';
import Paper from '@material-ui/core/Paper';

const AddItem = ({ itemCreate , menuSections }) => {

  const [value, setValue] = useState(0);
  const [itemTags, setItemTags] = useState([]);

  const handleChange = (event) => {

    setValue(event.target.value);

  };


  useEffect(()=> {
    document.addEventListener('item_tag_update', e => {
      setItemTags(e.detail);
    })
    return ()=>{};
  }, []);

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
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
    dots: {
      padding: '8px 0px 8px 18px',
      marginTop: '8px'
    },
    radioContainer: {
      width: '100%',
      height: '100%',
      padding: '16px'
    }
  }));

  const classes = useStyles();

  const submitItem = (e) => {

    e.preventDefault();

    const item = {
      name: e.target.itemName.value,
      description: e.target.itemDescription.value,
      price: e.target.itemPrice.value,
      tags: itemTags,
      section: value
    };

    itemCreate(item, value);
    
    e.target.itemDescription.value = '';
    e.target.itemPrice.value = '';
    e.target.itemName.value = '';

    resetTags();
    
  }

  const resetTags = () => {

    let event = new CustomEvent("add_tag_reset", {bubbles: true});
    document.dispatchEvent(event);

  }

  const radios = menuSections.map((section, index) => {

    return <FormControlLabel value={index} control={<Radio checked={value == index}/>} label={section.name} key={index} />
      
  });

  return (
    
      <>

        <CssBaseline />
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5">
          Add Item
          </Typography>
          <form className={classes.form} onSubmit={submitItem} noValidate>
          <Grid container >
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="itemName"
              label="Item Name"
              name="itemName"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="itemDescription"
              label="Item Description"
              name="itemDescription"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="itemPrice"
              label="Item Price"
              name="itemPrice"
            />
            </Grid>
                <Grid item xs={4} className={classes.dots}>

                  <Paper className={classes.radioContainer}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Section</FormLabel>
                      <RadioGroup aria-label="section" name="section1" value={value} onChange={handleChange}>
                      {radios}
                      </RadioGroup>
                    </FormControl>
                  </Paper>
                  

              </Grid>
            </Grid>
            <AddItemTags />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<AddCircleOutlineIcon />}
            > Add Item
            </Button>

          </form>
        </div>
      
      
     </>
  );
}

export default AddItem;



