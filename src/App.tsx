import "./App.css";
import TodoCard from "./components/TodoCard";
import Aside from "./components/aside/Aside";

const app = () => {
  return (
    <>
      <Aside />
      <main className="main-content">
        <TodoCard />
      </main>
    </>
  );
};

export default app;
