import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

const AddItem = ({ itemCreate , menuSections}) => {

  const [value, setValue] = useState(0);

  const handleChange = (event) => {

    setValue(event.target.value);

  };

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
      padding: '8px 0px 0px 18px',
      marginTop: '64px'
    }
  }));

  const classes = useStyles();

  const submitItem = (e) => {

    e.preventDefault();

    const item = {
      name: e.target.itemName.value,
      description: e.target.itemDescription.value,
      price: e.target.itemPrice.value,
      section: value
    };

    itemCreate(item, value);
    
    e.target.itemDescription.value = '';
    e.target.itemPrice.value = '';
    e.target.itemName.value = '';
    
  }

  const radios = menuSections.map((section, index) => {

    return <FormControlLabel value={index} control={<Radio checked={value == index}/>} label={section.name} key={index} />
      
  });

  return (
    <Grid container >
      <Grid item xs={8}>

        <CssBaseline />
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5">
          Add an Item
          </Typography>
          <form className={classes.form} onSubmit={submitItem} noValidate>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<CreateIcon />}
            > Add Item
            </Button>

            
          </form>
        </div>


      </Grid>
      <Grid item xs={4} className={classes.dots}>

        <FormControl component="fieldset">
          <FormLabel component="legend">Section</FormLabel>
          <RadioGroup aria-label="section" name="section1" value={value} onChange={handleChange}>
          {radios}
          </RadioGroup>
        </FormControl>

      </Grid>
     </Grid>
  );
}

export default AddItem;



