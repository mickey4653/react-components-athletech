import TodoItem from "./TodoItem/TodoItem";
const TodoList = (props) => {
  const { todos, onDelete } = props;

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
