import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

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

const Friend = props => {
  const classes = useStyles();
  //const element = React.createRef();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    return () => {
      // setHide(true);
    };
  }, []);

  return (
    <StyledGrid item xs={12} lg={3} md={4} hide={hide}>
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
          <IconButton onClick={() => props.handleEditMode(props.friend)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              setHide(true);
              props.handleDeleteFriend(props.friend.id);
            }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </CardActions>
      </Card>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  ${props => {
    if (!props.hide) {
      return [props.theme.animation.show, props.theme.animation.xAxis];
    } else {
      return [props.theme.animation.hideXAxis, props.theme.animation.hide];
    }
  }}
`;
export default Friend;
