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
      friendList: [],
      name: "",
      email: "",
      age: "",
      editMode: false
    };
  }

  componentDidMount() {
    axios
      .get("https://tmfse.sse.codesandbox.io/friends")
      .then(response => this.setState({ friendList: response.data }))
      .catch(err => console.log("Error", err));
  }

  deleteFriendToState = id => {
    axios
      .delete(`https://tmfse.sse.codesandbox.io/friends/${id}`)
      .then(response => this.setState({ friendList: response.data }))
      .catch(err => console.log(err));
  };

  handleEditMode = FriendtoEdit => {
    this.setState({
      editMode: true,
      toEdit: FriendtoEdit.id,
      name: FriendtoEdit.name,
      age: FriendtoEdit.age,
      email: FriendtoEdit.email
    });
  };

  handleResetEditMode = () => {
    this.setState({
      name: "",
      age: "",
      email: "",
      editMode: false,
      toEdit: null
    });
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  };

  handleEditAddFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    if (!this.state.editMode) {
      axios
        .post("https://tmfse.sse.codesandbox.io/friends", newFriend)
        .then(response => {
          // setName("");
          // setEmail("");
          // setAge("");
          this.setState({
            name: "",
            age: "",
            email: ""
          });
          this.setState({ friendList: response.data });
        })
        .catch(err => {
          console.log(err);
          // this.setState({
          //   error: err.response.message
          // });
        });
    } else {
      axios
        .put(
          `https://tmfse.sse.codesandbox.io/friends/${this.state.toEdit}`,
          newFriend
        )
        .then(response => {
          this.handleResetEditMode();
          this.setState({ friendList: response.data });
        })
        .catch(err => {
          console.log(err);
          // this.setState({
          //   error: err.response.message
          // });
        });
    }
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
                    name={this.state.name}
                    email={this.state.email}
                    age={this.state.age}
                    addNewFriendToState={this.addNewFriendToState}
                    handleChangeName={this.handleChangeName}
                    handleChangeEmail={this.handleChangeEmail}
                    handleChangeAge={this.handleChangeAge}
                    handleOnSubmit={this.handleEditAddFriend}
                    editMode={this.state.editMode}
                  />
                  <FriendList
                    {...props}
                    friendList={this.state.friendList}
                    handleDeleteFriend={this.deleteFriendToState}
                    handleEditMode={this.handleEditMode}
                  />
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
