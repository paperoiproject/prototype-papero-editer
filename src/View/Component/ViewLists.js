import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {}
});

const selectBotton = props => {
  if (true) {
    return (
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          onClick={e => {
            props.onClick(e);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    );
  } else {
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
            <Avatar alt="Remy Sharp" src={props.image} />
          </ListItemAvatar>
          <ListItemText primary={props.name} />
          {selectBotton(props)}
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(styles)(ViewLists);