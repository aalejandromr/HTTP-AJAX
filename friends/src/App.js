import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import FriendList from "./components/FriendComponent"
import axios from "axios";

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      friendList: []
    }
  }

  componentDidMount()
  {
    axios
    .get("http://localhost:5000/friends")
    .then(response => this.setState({friendList: response.data}))
    .catch(err => console.log("Error", err));
  }

  render()
  {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route exact path="/" render={props => <FriendList {...props} friendList={this.state.friendList}/>} />
              {/* <Route path="/avenger/:id" component={AvengerDetail} /> */}
            </Switch>
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
