import { useState } from "react";

const AddTodo = (props) => {
  const { addTodo } = props;

  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo(""); //clear input fields after adding todo
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new Todo task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
