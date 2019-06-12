import React from 'react'
import styled from 'styled-components'
import Friend from "./Friend";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0
  }
}));

const StyledFriendList = (props) => {
  return(
    <Grid container className={props.className} spacing={3}>
      { props.friendList.map((friend, key) => <Friend key={key} friend={friend}/> )}
    </Grid>
  )
}

const FriendList = styled(StyledFriendList)`
  ${props => props.theme.animation.show}
  ${props => props.theme.animation.yAxis}
  width: 100% !important;
`

export default FriendList