import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Todo({ id, task, isEditing }) {
  const FORM_INITIAL_STATE = { id, task, isEditing };
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const todoEdit = (id) => {
    dispatch({ type: "todoEdit", payload: { id } });
  };

  const todoDelete = (id) => {
    dispatch({ type: "todoDelete", payload: { id } });
  };

  const todoUpdate = () => {
    dispatch({
      type: "todoUpdate",
      payload: { id, task: formData.task, isEditing: false },
    });
  };

  return isEditing ? (
    <form onSubmit={todoUpdate}>
      <input
        type="text"
        name="task"
        value={formData.task}
        onChange={handleChange}
      ></input>
      <button type="submit">Update</button>
    </form>
  ) : task ? (
    <div>
      {task}
      <button type="button" onClick={() => todoEdit(id)}>
        Edit
      </button>
      <button type="button" onClick={() => todoDelete(id)}>
        Delete
      </button>
    </div>
  ) : null;
}

export default Todo;
