import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const scrollToElememt = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElememt("featured")}>
          Event starts in...
        </ListItem>
        <ListItem button onClick={() => scrollToElememt("venueInfo")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrollToElememt("highlight")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElememt("pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElememt("location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
