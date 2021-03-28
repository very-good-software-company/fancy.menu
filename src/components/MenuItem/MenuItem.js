import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const MenuItem = ({ item }) => {
  const useStyles = makeStyles(theme => ({
    item: {
      paddingBottom: '16px',
      position: 'relative'
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
    },
    chip: {
      backgroundColor: '#ffca28',
      height: '16px',
      width: '16px',
      border: 'solid 1px #c79a00',
      fontSize: '10px'
    },
    tagContainer: {
      position: 'absolute',
      top: 0,
      right: '-32px',
      height: '100%',
      width: '20px',
      paddingTop: '4px'
    }
  }));
  
  const classes = useStyles();

  let tags = [];

  if(item.tags){
    tags = item.tags.filter(tag => tag.set === true);
  }
  

  const uiTags = tags.map((tag, index) => {

    return <Avatar key={index} className={classes.chip}>{tag.abbr}</Avatar>
  })

  return (
    <>
      <div className={classes.item}>
        <Typography className={classes.title} component="h6" variant="h6">
          { item.name }
        </Typography>
        <Typography className={classes.description}>
          { item.description }
        </Typography>
        <Typography className={classes.price}>
          { item.price }
        </Typography>
        <div className={classes.tagContainer}>
          {uiTags}
        </div>
          
      </div>
    </>
  )
}

export default MenuItem;