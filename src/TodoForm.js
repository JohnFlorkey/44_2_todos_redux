import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

function TodoForm() {
  const FORM_INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(FORM_INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({
      type: "todoAdd",
      payload: { ...formData, id: uuid(), isEditing: false },
    });
    setFormData(FORM_INITIAL_STATE);
  };

  console.log(formData);
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <label className="TodoForm-label" htmlFor="task">
        Task
      </label>
      <input
        className="TodoForm-input"
        type="text"
        name="task"
        id="task"
        value={formData.task}
        onChange={handleChange}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default TodoForm;
