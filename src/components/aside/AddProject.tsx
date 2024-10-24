import "../../styles/addProject.css";
import { useEffect, useState, useRef } from "react";

type Props = {
  addProject: Function;
};
type AddProps = {
  addProject: Function;
  setShowAdd: Function;
};
// TODO: two components in this file

//COMPONENT to handle adding new PROJECT NAME
const AddForm = ({ addProject, setShowAdd }: AddProps) => {
  const [inputValue, setInputValue] = useState("");
  const addRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  // Function to handle adding new project on PRESSING ENTER
  const handleSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (inputValue.trim() !== "") {
      addProject(inputValue.trim().toLowerCase());
      setInputValue("");
      setShowAdd(false);
    }
  };

  // Add event on window(outside) if clicked to remove this component
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof Node &&
        !(addRef.current as HTMLElement).parentElement?.contains(e.target)
      ) {
        setShowAdd(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={"add-project"}
      ref={addRef as React.RefObject<HTMLDivElement>}
      onKeyDown={(e) => {
        e.key === "Enter" ? handleSubmit(e) : null;
      }}
    >
      <span title="Close" onClick={() => setShowAdd(false)}>
        +
      </span>
      <input
        name={"add-project-name"}
        type="text"
        value={inputValue}
        placeholder="Project name"
        onChange={handleChange}
      />
    </div>
  );
};
// End of adding new PROJECT NAME
// Returned main component
const AddProject = ({ addProject }: Props) => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="add-pj">
      <h1>
        Projects
        <span title="Add New" onClick={() => setShowAdd(!showAdd)}>
          +
        </span>
      </h1>
      {showAdd && <AddForm addProject={addProject} setShowAdd={setShowAdd} />}
    </div>
  );
};

export default AddProject;
