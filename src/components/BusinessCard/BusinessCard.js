import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

const BusinessCard = ({ business, deleteBusiness }) => {

  const useStyles = makeStyles(theme => ({

    button: {
      position: 'absolute',
      bottom: 0,
      right: 0
      
    },
    paper: {
      padding: '0px 124px 0px 24px',
      position: 'relative',
      margin: 'auto'
    },
    image: {
      height: '80px',
      width: '80px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(${business.image})`,
      display: 'inline-block',
      verticalAlign: 'top',
      marginRight: '16px',
      borderRadius: '50%'
    },
    title: {
      display: 'inline-block',
      verticalAlign: 'top',
      marginTop: '16px'
    },
    deleteIcon: {
      color: '#e53935'
    }
  }));
  
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} className={classes.paper}>
        <div className={classes.image}></div>
        <Typography className={classes.title} component="h4" variant="h4">
          { business.name }
        </Typography>
        <IconButton
          aria-label="delete"
          className={classes.button}
          onClick={deleteBusiness}
        >
          <DeleteIcon className={classes.deleteIcon}/>
        </IconButton>
      </Paper>
    </>
  )

}

export default BusinessCard;