import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {},
  card: {
    margin: "1vw",
    maxWidth: "25vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

const ScenarioList__Card = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            image={props.image}
            height="auto"
            title="詳細を見る"
            onClick={e => {
              props.onClick(e);
            }}
          />
          <CardContent>
            <Typography>{props.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ScenarioList__Card);