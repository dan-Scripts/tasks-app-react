import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

import "../../styles/project.css";

type Props = {
  className?: string;
  title: string;
  todoCount: number;
  handleToggle: Function;
};

const Project = ({
  title = "Project",
  todoCount,
  handleToggle,
  className = ""
}: Props) => {
  const iconRef = useRef<HTMLDivElement>(null);
  // get the lowercase NAME of the type of project clicked
  const listType = title.split(" ")[0].toLocaleLowerCase();

  const handleIcon = () => {
      const icon = iconRef.current?.childNodes[0] as HTMLElement;
      icon?.classList.toggle("rotate");
  };

  return (
    <div
      className={"project " + className}
      onClick={() => {
        handleIcon();
        handleToggle(listType);
      }}
    >
      <div className="wrapper">
        <h3>{title}</h3>
        <p>
          <span>{todoCount}</span> in this category..
        </p>
      </div>

      <span ref={iconRef}>
        <FaChevronDown className="expand-icon" size={25} fill="#ccc" />
      </span>
    </div>
  );
};
export default Project;
