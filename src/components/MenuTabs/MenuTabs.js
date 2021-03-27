import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PreviewSimpleMenu from '../PreviewSimpleMenu';
import PreviewCleanMenu from '../PreviewCleanMenu';
import PreviewLightMenu from '../PreviewLightMenu';
import PreviewDarkMenu from '../PreviewDarkMenu';
import PreviewFancyMenu from '../PreviewFancyMenu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MenuTabs({menu}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Simple Menu" {...a11yProps(0)} />
          <Tab label="Light Menu" {...a11yProps(1)} />
          <Tab label="Dark Menu" {...a11yProps(2)} />
          <Tab label="Clean Menu" {...a11yProps(3)} />
          <Tab label="Fancy Menu" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PreviewSimpleMenu menu={menu}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PreviewLightMenu menu={menu}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PreviewDarkMenu menu={menu}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PreviewCleanMenu menu={menu}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PreviewFancyMenu menu={menu}/>
      </TabPanel>
    </div>
  );
}
