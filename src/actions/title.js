export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

//pure function
export function toggleEditing() {
  return {
    type: TOGGLE_EDITING
  };
}

export function updateTitle(title) {
  return {
    type: UPDATE_TITLE,
    payload: title
    //  newTitle || props.title }
  };
}
