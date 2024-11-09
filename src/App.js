import { useState } from "react";
import Header from "./components/Header/Header";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import Card from "./components/Card/Card";
import ToolTip from "./components/Reusables/ToolTip";
import DropDown from "./components/Reusables/DropDown";
import NotificationBadge from "./components/Reusables/NotificationBadge";
import ProgressBar from "./components/Reusables/ProgressBar";
import ModalComponent from "./components/Reusables/Modal";
const App = () => {
  const [todos, setTodos, selectedCategory, setSelectedCategory] = useState([]);

  //Adding new todo
  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  //Deleting a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'books', label: 'Books' },
    { value: 'clothing', label: 'Clothing' },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
    <Card>
    <div>
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
    </Card>

{/* Reusable Components */}
<ToolTip text="This is a tooltip">
<button>Hover over me!!!</button>
</ToolTip>

<DropDown
  options={categories}
  selected={selectedCategory}
  onChange={(value) => setSelectedCategory(value)}
/>

<NotificationBadge count={5}>
  <button>Messages</button>
</NotificationBadge>

<div className="progress-bar-container">
<ProgressBar progress={50} />
</div>

<div className="modal-container">
<ModalComponent isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
  <h2>Modal Content</h2>
  <p>This is some text inside the modal!</p>
</ModalComponent>
<button onClick={() => setModalOpen(true)}>Open Modal</button>
</div>

</>
  );
};

export default App;
