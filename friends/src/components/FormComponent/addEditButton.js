import React from "react";
import styled from "styled-components";

const AddEditButton = AddSection => EditSection =>
  class extends React.Component {
    render() {
      return (
        <>
          {!this.props.editMode ? (
            <AddSection />
          ) : (
            <EditSection handleResetEditMode={this.props.handleResetEditMode} />
          )}
        </>
      );
    }
  };


export default AddEditButton;
