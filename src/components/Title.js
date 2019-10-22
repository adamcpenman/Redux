import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
// import { initialState, reducer } from "../reducers/title";

import { toggleEditing, updateTitle } from "../actions/title";

const Title = props => {
  const [newTitle, setNewTitle] = useState();
  // const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    // props.dispatch({ type: "TOGGLE_EDITING" });
    props.toggleEditing();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTitle("");
    // props.dispatch({ type: "UPDATE_TITLE", payload: newTitle || props.title });
    props.updateTitle(newTitle || props.title);
    props.toggleEditing();
    // props.dispatch({ type: "TOGGLE_EDITING" });
  };

  return (
    <div>
      {props.editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTitle"
            placeholder={props.title}
            value={newTitle}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

//assigning props values behind the scene
function mapStateToProps(state) {
  return {
    title: state.title,
    editing: state.editing
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     updateTitle: title => dispatch(updateTitle(title)),
//     toggleEditing: () => dispatch(toggleEditing())
//   };
// }

const mapDispatchToProps = {
  updateTitle,
  toggleEditing
};

//calling connect from react-redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
