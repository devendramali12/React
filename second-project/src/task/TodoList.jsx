import { useState } from "react";

const TodoList = () => {
  let [task, setTask] = useState("");
  return (
    <>
      <h2>TodoList</h2>
      <input type="text" placeholder="Enter Task" value={task} />
      <button>+</button>
    </>
  );
};

export default TodoList;
