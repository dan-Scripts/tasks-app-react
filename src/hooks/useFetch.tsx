import { useEffect, useState } from "react";
import { TodoType } from "../types";

const URL = "http://localhost:8080/todos";

const useFetch = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(URL, { signal: signal });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: TodoType[] = await response.json();

        setTodos(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(`"${error.name}" : ${error.message}`);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);
  // return all available todos with that priority type
  const getTodos = (priority: string) =>
    todos.filter((todo) => priority === todo.priority);

  // return count of available that project type
  const getTodosCount = (priority: string): number => {
    return todos.filter((todo) => todo.priority === priority).length;
  };

  return { todos, getTodos, getTodosCount };
};

export default useFetch;
