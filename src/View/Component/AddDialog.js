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

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import Button from "@material-ui/core/Button";

import AddDialog__TextBox from "./AddDialog__TextBox.js";


const styles = theme => ({
  root: {}
});

const selectBotton = props => {
  if (props.judg) {
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

const AddDialog = props => {
  const { classes } = props;
  console.log(props.items);
  return (
    <div className={classes.root}>
      <Dialog open={props.open} onClose={props.onClose} scroll="paper">
        <DialogTitle id="dialog-title">Add Scenario</DialogTitle>
        <AddDialog__TextBox changeWord={(e) => {props.changeWord(e)}}/>
        <DialogContent dividers="true">
          {props.items.map((item) => {
            return (
              <ListItem button onClick={() => props.addList(item)}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.image} />
                </ListItemAvatar>
               <ListItemText primary={item.name} />
               {selectBotton(props)}
             </ListItem>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={e => props.onClose()} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(AddDialog);