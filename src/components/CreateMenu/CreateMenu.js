import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';

const CreateMenu = ({ menuCreate }) => {

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
    <div>
      
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

      
    </div>
  );
}

export default CreateMenu;



