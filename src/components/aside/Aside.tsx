import React, { useState, Fragment } from "react";
import Search from "../../common/SearchForm";
import AddProject from "./AddProject";
import Project from "./Project";
import TodoList from "./TodoList";
import useFetch from "../../hooks/useFetch";

type Props = {};
// type ProjectState = { showTodos: boolean};
export interface State {
  [key: string]: { showTodos: boolean };
}

const Aside = (props: Props) => {
  // State to track toggle for each project
  const [toggleStates, setToggleStates] = useState<State>({
    all: { showTodos: false },
    high: { showTodos: false },
    mid: { showTodos: false },
    avg: { showTodos: false },
    low: { showTodos: false },
  });

  const { todos, getTodos, getTodosCount } = useFetch();

  // Function to handle adding new project for a specific project
  const addNewProject = (project: string) => {
    if (toggleStates[project]) {
      return alert("Project already exists!");
    }
    // Add new project to state
    setToggleStates((prevState) => ({
      ...prevState,
      [project]: { showTodos: false },
    }));
  };
  // Function to handle toggling for a specific project
  const handleToggle = (project: string) => {
    setToggleStates((prevState) => {
      // Add new Changed project, with changed states
      return {
        ...prevState,
        [project]: {
          showTodos: !prevState[project].showTodos,
        },
      };
    });
  };

  return (
    <div className="aside">
      <Search />

      <AddProject addProject={addNewProject} />
      {/* render the rest of the projects But not "ALL" as it needs different data */}
      {Object.keys(toggleStates).map((key) => {
        if (key === "all") {
          return;
        } else {
          return (
            <Fragment key={key}>
              <Project
                title={`${key} ${
                  getTodosCount(`${key}`) > 1 ? "projects" : "project"
                }`}
                todoCount={getTodosCount(`${key}`)}
                handleToggle={handleToggle}
              />
              {toggleStates[`${key}`].showTodos && (
                <TodoList todos={getTodos(`${key}`)} />
              )}
            </Fragment>
          );
        }
      })}

      <Project
        className="add"
        title={"all projects"}
        todoCount={todos.length}
        handleToggle={handleToggle}
      />
      {toggleStates["all"].showTodos && <TodoList todos={todos} />}
    </div>
  );
};
export default Aside;
