import React, { useRef }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuSection from '../MenuSection';
import DeleteWrapper from '../DeleteWrapper';

const PreviewMenu = ({ menu, deleteSection }) => {

  const useStyles = makeStyles(theme => ({
    card: {
      padding: '120px 40px 0px',
      textAlign: 'right'
    },
    title: {
      borderBottom: 'solid 2px #ffca28',
      padding: '16px 0px',
      marginBottom: '64px'
    },
    none: {
      // display: 'none'
    }
  }));
  
  const classes = useStyles();
  
  return (
    <>
      <Paper className={classes.card}>

        <Typography className={classes.title} component="h1" variant="h3">
          { menu.name }
        </Typography>
         
        {
          menu.sections.map((section, index) => {

            return <DeleteWrapper key={ index } section={ index } delete={deleteSection} child={ <MenuSection section={ section }/> } />
              
          })
        }
        
      </Paper>
    </>
  )

}

export default PreviewMenu;