import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '../MenuItem';

const MenuSection = ({ section }) => {
  const useStyles = makeStyles(theme => ({
    title: {
      
    },
    section: {
      paddingBottom: '32px'
    }
  }));
  
  const classes = useStyles();

  return (
    <>
      <div className={classes.section}>
        <Typography className={classes.title} component="h5" variant="h5">
          { section.name }
        </Typography>

        {
          section.items.map((item, index) => {
            return <MenuItem key={ index } item={ item }/> 
          })
        }

      </div>
    </>
  )
}

export default MenuSection;