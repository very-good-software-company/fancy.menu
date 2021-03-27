import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuSection from '../MenuSection';


const PreviewDarkMenu = ({ menu, deleteSection }) => {

  const useStyles = makeStyles(theme => ({
    card: {
      padding: '120px 40px 0px',
      textAlign: 'left',
      backgroundColor: '#000a12'
    },
    title: {
      borderBottom: 'solid 2px #cfcfcf',
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
      <Paper className={classes.card} square={true}>

        <Typography className={classes.title} component="h1" variant="h3" color="secondary">
          { menu.name }
        </Typography>
         
        {
          menu.sections.map((section, index) => {

            // return <DeleteWrapper key={ index } section={ index } aDelete={deleteSection} child={ <MenuSection section={ section }/> } />
            return <MenuSection section={section} key={index} dark={true}/> 
              
          })
        }
        
      </Paper>
    </>
  )

}

export default PreviewDarkMenu;