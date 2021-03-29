import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Grid from '@material-ui/core/Grid';


const AddSection = ({ sectionCreate }) => {

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
  }));

  const classes = useStyles();

  const submitSection = (e) => {

    e.preventDefault();

    const section = {
      name: e.target.sectionName.value,
      items: [],
      tags: []
    };

    sectionCreate(section);
    e.target.sectionName.value = '';
    
  }

  return (
    <Grid container >
      <Grid item xs={12}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          Add Section
          </Typography>
          <form className={classes.form} onSubmit={submitSection} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="sectionName"
              label="Section Name"
              name="sectionName"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              endIcon={<AddCircleOutlineIcon />}
            > Add Section
            </Button>  
          </form>

          

        </div>
      </Grid>
    </Grid>
  );
}

export default AddSection;



