import React from "react";
import styled from "styled-components";

const AddEditButton = AddSection => EditSection =>
  class extends React.Component {
    render() {
      return (
        <FlexDiv>
          {!this.props.editMode ? (
            <AddSection />
          ) : (
            <EditSection handleResetEditMode={this.props.handleResetEditMode} />
          )}
        </FlexDiv>
      );
    }
  };

const FlexDiv = styled.div`
  display: flex;
`;

export default AddEditButton;
