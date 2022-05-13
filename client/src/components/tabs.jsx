import React from "react";
import { Tabs, Tab, Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { PostAdd } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

let maxTabIndex = 0;
let currentTablIndex = 0;
export default function Pipeline(props) {
  const classes = useStyles();

  // Handle Tab Button Click
  const [tabId, setTabId] = React.useState(0);
  const handleTabChange = (event, newTabId) => {
    if (newTabId === "tabProperties") {
      handleAddTab();
    } else {
      currentTablIndex = newTabId;
      setTabId(newTabId);
    }
  };

  // Handle Add Tab Button
  const [tabs, setAddTab] = React.useState([]);
  const handleAddTab = () => {
    maxTabIndex = maxTabIndex + 1;
    setAddTab([
      ...tabs,
      <Tab label={`New Tab ${maxTabIndex}`} key={maxTabIndex} />
    ]);
    handleTabsContent();
  };

  // Handle Add Tab Content
  const [tabsContent, setTabsContent] = React.useState([
    <TabPanel tabId={tabId}>Default Panel - {Math.random()}</TabPanel>
  ]);
  const handleTabsContent = () => {
    setTabsContent([
      ...tabsContent,
      <TabPanel tabId={tabId}>New Tab Panel - {Math.random()}</TabPanel>
    ]);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={tabId}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="Default" />
          {tabs.map(child => child)}
          <Tab icon={<PostAdd />} value="tabProperties" />
        </Tabs>
      </AppBar>
      <Box padding={2}>{tabsContent.map(child => child)}</Box>
    </Paper>
  );
}

function TabPanel(props) {
  const { children, tabId } = props;
  return (
    <Box
      value={maxTabIndex}
      index={maxTabIndex}
      hidden={tabId !== currentTablIndex}
      key={maxTabIndex}
    >
      {children}
    </Box>
  );
}
