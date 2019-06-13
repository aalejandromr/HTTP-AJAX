import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import styled from "styled-components";

export default function Form(props) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    age: ""
  });
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangeAge = event => {
    setAge(event.target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const newFriend = {
      name: name,
      email: email,
      age: age
    };
    axios
      .post("https://tmfse.sse.codesandbox.io/friends", newFriend)
      .then(result => {
        setName("");
        setEmail("");
        setAge("");
        props.addNewFriendToState(newFriend);
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   error: err.response.message
        // });
      });
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <TextField
        id="name"
        label="name"
        value={name}
        onChange={handleChangeName}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="email"
        label="email"
        value={email}
        onChange={handleChangeEmail}
        margin="normal"
        variant="outlined"
        type="email"
      />

      <TextField
        id="email"
        label="age"
        value={age}
        onChange={handleChangeAge}
        margin="normal"
        variant="outlined"
        type="number"
      />
      <Button variant="contained" color="primary" type="Submit">
        Send
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
