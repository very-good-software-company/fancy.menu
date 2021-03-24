import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const DeleteWrapper = ({aDelete, section, child}) => {

  const [show, setShow] = useState(true);

  const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'relative'
    },
    delete: {
      position: 'absolute',
      top: '-4px',
      right: '-8px',
      padding: '0px 4px',
      backgroundColor: '#e53935',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '4px'
    }
   
  }));
  
  const classes = useStyles();

  const showX = () => {
    setShow(false);
  }

  const hideX = () => {
    setShow(true);
  }
  
  return (
    <div className={classes.wrapper} onMouseEnter={showX} onMouseLeave={hideX}>
      <div onClick={()=> {aDelete(section)}} className={classes.delete} hidden={show}>x</div>
      { child }
    </div>
  );
  
}

export default DeleteWrapper;