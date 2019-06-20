import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    display: "inline-flex",
    justifyContent: "space-between"
  },
  searchField: {
    width: "85%",
    marginLeft: "2.5%",
    marginBottom: "2.5%"
  },
  searchIcon: {}
});

const AddDialog__TextBox = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TextField
        className={classes.searchField}
        label="Search scenario"
        type="search"
        onKeyPress={e => props.changeWord(e)}
      />
      <IconButton
        className={classes.searchIcon}
        onClick={e => {
          props.startSearch(e);
        }}
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(AddDialog__TextBox);