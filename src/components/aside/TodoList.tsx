import Todo from "./Todo";
import { TodoType } from "../../hooks/useFetch";
import "../../styles/todoList.css";

type Props = {
  todos: TodoType[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.title} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
