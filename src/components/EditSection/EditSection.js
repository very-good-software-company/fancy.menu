import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditItem from '../EditItem';
import Grid from '@material-ui/core/Grid';

const EditSection = ({ section, sectionIndex, setSection, setItem }) => {

  const [tempSection, setTempSection] = useState(section);

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const menuItems = [];

  section.items.forEach((item, index) => {

    const tempItem = {
      ...item,
      section: section,
      sectionIndex: sectionIndex,
      itemIndex: index
    }

    menuItems.push(tempItem);
  })

  const sectionChange = e => {
    e.preventDefault();

    const aTempSection = {
      ...tempSection,
      name: e.target.value
    }

    setTempSection(aTempSection);
    setSection(aTempSection, sectionIndex)
  }

  return (
    <Grid container >
      <Grid item xs={12}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          Edit Section
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="sectionName"
              label="Section Name"
              name="sectionName"
              onChange={sectionChange}
              defaultValue={tempSection.name}
            />
          </form>
        </div>

        {menuItems.map((item, index) => {
          return <EditItem item={item} key={index} setItem={setItem}/>
        })}

      </Grid>
    </Grid>
  );
}

export default EditSection;



