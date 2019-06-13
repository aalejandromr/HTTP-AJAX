import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import FriendList from "./components/FriendComponent";
import axios from "axios";
import Form from "./components/FormComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: []
    };
  }

  componentDidMount() {
    axios
      .get("https://tmfse.sse.codesandbox.io/friends")
      .then(response => this.setState({ friendList: response.data }))
      .catch(err => console.log("Error", err));
  }

  addNewFriendToState = friend => {
    this.setState(prevState => {
      return {
        friendList: [...prevState.friendList, friend]
      };
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Route
              path="/"
              render={props => (
                <>
                  <Form
                    {...props}
                    addNewFriendToState={this.addNewFriendToState}
                  />
                  <FriendList {...props} friendList={this.state.friendList} />
                </>
              )}
            />
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
