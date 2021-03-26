import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import EditSection from '../EditSection';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const SectionAccordion = ({ sections, setSection, setItem }) => {

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    },
    title: {
      marginBottom: '8px'
    }
  }));

  const classes = useStyles();

  const accordians = sections.map((section, index) => {


      return  <Accordion square expanded={expanded === index} onChange={handleChange(index)} key={index}>
                <AccordionSummary aria-controls={`panel_content_${index}`} id={`panel_header_${index}`} expandIcon={<ExpandMoreIcon />}>
                  <Typography>{section.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  
                  <EditSection section={section}  setItem={setItem} setSection={setSection} sectionIndex={index}/>

                </AccordionDetails>
              </Accordion>


  });

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5" className={classes.title}>
          Sections
      </Typography>
      {accordians}
    </div>
  );
}

export default SectionAccordion;