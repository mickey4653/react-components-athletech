import { useState } from "react";
import Header from "./components/Header";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  //Adding new todo
  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  //Deleting a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
