import { useState, useEffect, useRef } from "react";

type TodoType = {
  title: string;
  description: string;
  dueDate: string | number;
  priority: string;
};

type Props = {};

const AddNewTodo = ({}: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      //   addProject(inputValue.trim());
      setInputValue("");
    }
  };
  // Add event on window(outside) if clicked to remove this component
  useEffect(() => {
    const handleRemove = (e: MouseEvent) => {
      const wrapper = document.querySelector(".add-form-wrapper");
      const closeBtn = document.querySelector(".add-form span");
      if (e.target === closeBtn || wrapper) {
        console.log(e.target);
        setShowForm(false);
      }
    };

    window.addEventListener("click", handleRemove);

    return () => {
      window.removeEventListener("click", handleRemove);
    };
  }, []);

  return (
    showForm && (
      <div className="add-form-wrapper">
        <form onSubmit={handleSubmit} className="add-form">
          <span title="Close">+</span>
          <input
            type="text"
            id="new-todo"
            value={inputValue}
            placeholder="Task Title"
            onChange={handleChange}
          />
          <textarea
            name="todo-text"
            id=""
            // placeholder={getTodosKeys(todoList).join(" ")}
            rows={5}
            value={textAreaValue}
            onChange={handleTextAreaChange}
          ></textarea>

          <div className="options">
            <label htmlFor="project-select">
              Priority:
              <select name="project-select" id="project-select" required>
                {/* {getTodosKeys(todoList).map((project) => {
                if (project === "all") return;
                return (
                  <option value={project} key={project}>
                    {project.slice(0, 1).toUpperCase() + project.slice(1)}
                  </option>
                );
              })} */}
              </select>
            </label>

            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    )
  );
};
export default AddNewTodo;

const getTodosKeys = (todoList: TodoType[]): string[] => {
  const availableProj = [...new Set(todoList.map((todo) => todo.priority))];
  return availableProj.sort();
};
