import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const EditItemTags = ({ item }) => {

  let tags = [];
  if(item.tags){
    tags = item.tags;
  }
  
  const [tagData, setTagData] = useState(tags);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      width: '100%'
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

  const classes = useStyles();

  const handleClick = tagIndex => {

    const tempTag = {
      ...tagData[tagIndex],
      set: !tagData[tagIndex].set
    }

    const tagArr = [
      ...tagData.slice(0, tagIndex),
      tempTag,
      ...tagData.slice(tagIndex + 1)
    ]

    setTagData(tagArr);
    sendTags(tagArr);
  }

  const sendTags = tagArr => {
    let event = new CustomEvent("edit_tag_update", {bubbles: true, detail: tagArr});
    document.dispatchEvent(event);
  }

  return (
    <Paper component="ul" className={classes.root}>
      {tagData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              className={classes.chip}
              avatar={<Avatar>{data.abbr}</Avatar>}
              onClick={()=> {handleClick(data.key)}}
              clickable
              color={data.set ? 'secondary' : 'primary'}
            />
          </li>
        );
      })}
    </Paper>
  );
}

export default EditItemTags;