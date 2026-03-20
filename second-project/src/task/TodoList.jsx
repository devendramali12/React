import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const TodoList = () => {
  let [task, setTask] = useState(""); // stores a single task value

  let [list, setList] = useState([]); // Stores all the task value

  let handleChange = (e) => {
    console.log(e.target);
    setTask(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (task == "") {
      alert("Please enter some task");
    } else {
      setList([...list, task]); // ["task1","task2"."task3"]
      setTask("");
    }
  };
  let handleDelete = (x) => {
    // x --> index of the task to be deleted
    let filteredArray = list.filter((value, index) => index != x);
    console.log(filteredArray); // ["task1","task2"]
    setList(filteredArray);
  };
  return (
    <>
      <h2>TodoList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={handleChange}
        />
        <button>+</button>
        {list.map((value, index) => {
          return (
            <div key={index}>
              <h3>{value}</h3>
              <span onClick={() => handleDelete(index)}>
                <MdDeleteOutline />
              </span>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default TodoList;
