import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const EditSection = props => {
  return (
    <>
      <StyledButton
        className={props.className}
        variant="contained"
        color="primary"
        type="Submit"
      >
        Edit
      </StyledButton>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={props.handleResetEditMode}
        className={props.className}
      >
        Cancel
      </StyledButton>
    </>
  );
};

// const StyledButton = styled(Button)`
//   margin: 5%;
// `;

export default EditSection;
