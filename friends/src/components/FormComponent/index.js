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

  const handleOnSubmit = event => {
    event.preventDefault();
    props.handleOnSubmit();
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <TextField
        id="name"
        label="name"
        value={props.name}
        onChange={props.handleChangeName}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="email"
        label="email"
        value={props.email}
        onChange={props.handleChangeEmail}
        margin="normal"
        variant="outlined"
        type="email"
      />

      <TextField
        id="email"
        label="age"
        value={props.age}
        onChange={props.handleChangeAge}
        margin="normal"
        variant="outlined"
        type="number"
      />
      <Button variant="contained" color="primary" type="Submit">
        {props.editMode ? "Edit" : "Add"}
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
