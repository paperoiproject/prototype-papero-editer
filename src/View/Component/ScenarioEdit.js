import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from "@material-ui/core/Divider";

import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';

import { Container, Draggable } from 'react-smooth-dnd';

const styles = theme => ({
  root: {
    width: "60vh",
    height: "40vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  }
});

const makeScenes = (scene_list, deleteAction) => {
  let list = scene_list.map((value, index) => {
    return (
      <Draggable key={index}>
      <ListItem button divider>
        <ListItemText primary={`${value.type}: ${value.text}`} id = {index}/>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Comments" onClick={() => deleteAction(index)}>
              <Delete />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      </Draggable>
    )
  })
  return (list)
}

const ScenesPaper = (props) => {
  const { classes } = props;
  console.log(props.scene_list)
  return (
    <List component="nav" className={classes.root}>
    <Container groupName="1" getChildPayload={i => props.scene_list[i]} onDrop={e => {props.listDrop(e)}}>
      {makeScenes(props.scene_list, props.deleteAction)}
    </Container>
    </List>
  );
}



export default withStyles(styles)(ScenesPaper);