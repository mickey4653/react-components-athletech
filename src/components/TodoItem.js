

const TodoItem = (props) =>{
const {todo, onDelete} = props;
return (
<li>

  {todo} &nbsp;
  <button onClick={onDelete}>Delete</button>
</li>
);
};
export default TodoItem;