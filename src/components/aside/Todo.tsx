import "../../styles/todoStyle.css";
import { TodoType } from "../../hooks/useFetch";
import { MdMoreVert } from "react-icons/md";

type Props = {
  todo: TodoType;
};

const Todo = ({ todo }: Props) => {
  return (
    <div className="todo">
      <input type="checkbox" name="todo-checkbox" />
      <h5>{todo.title}</h5>
      <p className="description">{todo.description}</p>
      <MdMoreVert className="options" />
    </div>
  );
};

export default Todo;
