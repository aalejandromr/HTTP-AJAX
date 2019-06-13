import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const EditSection = props => {
  return (
    <>
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
    </>
  );
};

// const StyledButton = styled(Button)`
//   margin: 5%;
// `;

export default EditSection;
