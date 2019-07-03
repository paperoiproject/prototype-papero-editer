import React from "react";
import { withStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import ToggleOn from "@material-ui/icons/ToggleOn";
import ToggleOff from "@material-ui/icons/ToggleOff";

const styles = theme => ({
  root: {}
});

const selectBotton = props => {
  if (props.call === "TimeTablePage") {
    if(props.item.power){
      return (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={e => {
              props.onClick(e);
            }}
          >
            <ToggleOn fontSize="large" htmlColor={green[500]} />
          </IconButton>
        </ListItemSecondaryAction>
      );
    }else{
      return (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={e => {
              props.onClick(e);
            }}
          >
            <ToggleOff fontSize="large" />
          </IconButton>
        </ListItemSecondaryAction>
      );
    }
  }
  else if (props.call === "RealTimeTable") {
    return (
      <ListItemSecondaryAction>
        
      </ListItemSecondaryAction>
    );
  }

  else {
    return;
  }
};

const ViewLists = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button onClick={e => props.onEvent()}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.item.image} />
          </ListItemAvatar>
          <ListItemText primary={props.item.name} />
          {selectBotton(props, props.call, props.item)}
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles)(ViewLists);
