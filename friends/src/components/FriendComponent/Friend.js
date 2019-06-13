import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import styled from "styled-components";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const StyledFriend = props => {
  const classes = useStyles();
  return (
    <Grid item xs={4} className={props.className}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.friend.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.friend.age} years old
          </Typography>
          <Typography variant="body2" component="p">
            You can email me to {props.friend.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small" /*component={Link} to={`friends/${props.friend.id}/edit`}*/
            onClick={() => props.handleEditMode(props.friend)}
          >
            Edit
          </Button>
          <IconButton
            aria-label="Delete"
            onClick={() => props.handleDeleteFriend(props.friend.id)}
          >
            <DeleteForeverOutlinedIcon
              className={classes.icon}
              color="action"
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Friend = styled(StyledFriend)`
  ${props => props.theme.animation.show}
  ${props => props.theme.animation.xAxis}
`;
export default Friend;
