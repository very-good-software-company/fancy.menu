import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';



const AddItemTags = () => {

  const tags = [
    { key: 0, abbr:'VE', label: 'Vegan', set: false },
    { key: 1, abbr:'VT', label: 'Vegitarian', set: false },
    { key: 2, abbr:'GF', label: 'Gluten Free', set: false },
    { key: 3, abbr:'DF', label: 'Dairy Free', set: false }
  ]
  
  const [tagData, setTagData] = useState(tags);

  useEffect(()=> {
    document.addEventListener('add_tag_reset', e => {
      setTagData(tags);
    })
    return ()=>{};
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
      marginTop: 12
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

  

  const classes = useStyles();

  const handleClick = tagIndex => {

    console.log('handle click : ', tagIndex)

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

    let event = new CustomEvent("item_tag_update", {bubbles: true, detail: tagArr});
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

export default AddItemTags;