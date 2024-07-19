import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addTask,
  completeTask,
  delTask,
  editeddTask,
  undoTask,
} from "./features/todoSlice";
import { Link, Outlet } from "react-router-dom";
import Todo from "./Todo";

function Todo2() {
  const dispatch = useDispatch();
  const [Task, setTask] = useState("");
  const [EditMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [completedTask, setCompletedTask] = useState("");

  const Tasks = useSelector((state) => state.todo);
  console.log(Tasks);

  const handleAdd = () => {

    
    dispatch(addTask(Task));
    setTask("")
  };
  //   console.log(Tasks);
  const handleSave = (id) => {
    dispatch(editeddTask({ editedtext: editedTask, id }));
    setEditMode(false);
  };

  console.log(completedTask);

  return (
    <div>
      {/* <Link to={'/Profile'}>
      <h2>Profile</h2>
      </Link>
      <Link to={'/Settings'}>
      <h2>Settings</h2>
      </Link>
<Outlet/> */}

      <h1>To do List</h1>
      <div id="inputs">
        <input
          type="text"
          id="newTask"
          placeholder="Add a new Task"
          value={Task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addBtn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <h2>Task List</h2>
      <ul>
        {Tasks &&
          Tasks.filter((todo) => todo?.complete === false).map((todo) => {
            return (
              <li key={todo?.id}>
                {EditMode ? (
                  <div>
                    <input
                      onChange={(e) => setEditedTask(e.target.value)}
                      defaultValue={todo.text}
                    />
                    <button onClick={() => handleSave(todo.id)}>Save</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => dispatch(completeTask(todo?.id))}>
                      ✅
                    </button>
                    {todo?.text}
                  </div>
                )}

                <button
                  className="delBtn"
                  onClick={() => dispatch(delTask(todo.id))}
                >
                  Delete
                </button>

                <button onClick={() => setEditMode(true)}>Edit </button>
              </li>
            );
          })}
      </ul>

      <h2>Done List</h2>
      <ul id="donelist">
        {Tasks &&
          Tasks.filter((todo) => todo?.complete !== false).map((todo) => {
            return (
              <li key={todo?.id}>
                <div>
                  {todo?.text}
                  <button onClick={() => dispatch(completeTask(todo?.id))}>
                    Undo
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todo2;
