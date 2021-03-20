import React, { useState, useRef } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const CreateBusiness = ({ aSubmitBusiness }) => {

  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputEl = useRef();

  const handleUploadClick = event => {
    console.log();

    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function(e) {

      setSelectedFile(reader.result)

    }.bind(this);
    
  };

  const handleButtonClick = event => {

    console.log('file : ', fileInputEl)
    
    fileInputEl.current.click();
  }

  const submitBusiness = e => {
    e.preventDefault();

    aSubmitBusiness(e.target.businessName.value, selectedFile)
  }

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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    card: {
      height: '200px',
      position: 'relative',
      overflow: 'visible',
      paddingTop: 'calc(25% - 20px)',
      textAlign: 'center',
      

    },
    input: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: '1',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      visibility: 'hidden',
      top: '0',
      left: '0'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    image: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: '0px',
      left: '0px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(${selectedFile})`
    }
   
  }));

  const classes = useStyles();

  return (
    <div>
      
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BusinessIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Business
        </Typography>
        <form className={classes.form} onSubmit={submitBusiness} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="businessName"
            label="Business Name"
            name="businessName"
            autoFocus
          />

          <Card className={classes.card} variant="outlined">

            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
              ref={fileInputEl}
            />

            {selectedFile != null && (

              // <img className={classes.image}  src={selectedFile}/>
              <div className={classes.image}></div>

            )}

            {selectedFile === null && (

              <Fab variant="extended" onClick={handleButtonClick}>
                <AddIcon className={classes.extendedIcon} />
                Upload Image
              </Fab>

            )}

          </Card>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Business / Website
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateBusiness;



