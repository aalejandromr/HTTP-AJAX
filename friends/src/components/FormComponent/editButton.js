import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const EditSection = props => {
  return (
    <StyledDiv>
      <Button
        className={props.className}
        variant="contained"
        color="primary"
        type="Submit"
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={props.handleResetEditMode}
      >
        Cancel
      </Button>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export default EditSection;
