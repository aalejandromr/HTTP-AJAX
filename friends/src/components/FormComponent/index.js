import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import styled from "styled-components";
import AddEditButton from "./addEditButton";
import AddButton from "./addButton";
import EditButton from "./editButton";
import Grid from "@material-ui/core/Grid";

export default function Form(props) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    age: ""
  });
  const ComponentFromAddEditButton = AddEditButton(AddButton)(EditButton);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    props.handleOnSubmit();
  };

  return (
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledGrid container spacing={3}>
          <StyledGrid item xs={12} md={3} lg={3}>
            <StyledFields
              id="name"
              label="name"
              value={props.name}
              onChange={props.handleChangeName}
              margin="normal"
              variant="outlined"
            />
          </StyledGrid>
          <StyledGrid item xs={12} md={3} lg={3}>
            <StyledFields
              id="email"
              label="email"
              value={props.email}
              onChange={props.handleChangeEmail}
              margin="normal"
              variant="outlined"
              type="email"
            />

          </StyledGrid>
          <StyledGrid item xs={12} md={3} lg={3}>
            <StyledFields
              id="email"
              label="age"
              value={props.age}
              onChange={props.handleChangeAge}
              margin="normal"
              variant="outlined"
              type="number"
            />
          </StyledGrid>
          <StyledButtomWrapper item xs={12} md={3} lg={3}>
            <ComponentFromAddEditButton
              editMode={props.editMode}
              handleResetEditMode={props.handleResetEditMode}
            />
          </StyledButtomWrapper>
        </StyledGrid>
      </StyledForm>
    );

}

const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5% 0%;
  box-sizing: border-box;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledFields = styled(TextField)`
  margin: 5% !important;
  box-sizing: border-box;
  @media screen and (min-width: 1500px) {
    width: 100%;
  }
`

const StyledForm = styled.form`
  width: 100%;
`

const StyledButtomWrapper = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media screen and (min-width: 1500px) {
    width: 100%;
  }
`