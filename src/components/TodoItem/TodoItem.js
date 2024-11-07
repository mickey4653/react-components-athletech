
import './TodoItem.css';
const TodoItem = (props) =>{
const {todo, onDelete} = props;
return (
<li className="todo-item">
  <span>{todo}</span>
  <button onClick={onDelete}>Delete</button>
</li>
);
};
export default TodoItem;