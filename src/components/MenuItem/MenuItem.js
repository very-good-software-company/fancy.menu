import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const MenuItem = ({ item }) => {
  const useStyles = makeStyles(theme => ({
    card: {
     
    },
    title: {
      color: '#9e9e9e',
      fontSize: '14px'
    },
    description: {
      color: '#9e9e9e',
      fontSize: '12px'
    },
    price: {
      color: '#9e9e9e',
      fontSize: '12px'
    }
  }));
  
  const classes = useStyles();

  return (
    <>
      <div>
        <Typography className={classes.title} component="h6" variant="h6">
          { item.name }
        </Typography>
        <Typography className={classes.description}>
          { item.description }
        </Typography>
        <Typography className={classes.price}>
          { item.price }
        </Typography>
      </div>
    </>
  )
}

export default MenuItem;