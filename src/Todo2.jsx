import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTask, delTask, editeddTask } from "./features/todoSlice";

function Todo2() {
  const dispatch = useDispatch();
  const [Task, setTask] = useState("");
  const [EditMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const Tasks = useSelector((state) => state.todo);
  // console.log(Tasks);
  const handleAdd = () => {
    dispatch(addTask(Task));
  };
  //   console.log(Tasks);
  const handleSave = (id) => {
    dispatch(editeddTask({ editedtext: editedTask, id }));
    setEditMode(false);
  };

  return (
    <div>
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
        {Tasks.map((todo) => {
          return (
            <li key={todo.id}>
              {EditMode ? (
                <div>
                  <input
                    onChange={(e) => setEditedTask(e.target.value)}
                    defaultValue={todo.text}
                  />
                  <button onClick={() => handleSave(todo.id)}>Save</button>
                </div>
              ) : (
                <p>{todo.text}</p>
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
      {/* {ErrorMessage && <p className="err">{ErrorMessage}</p>}
      <h2>Task List</h2>
      <ul id="todoList">
        {Tasks.map((task, index) => (
          <li key={index}>
            {editMode && editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button className="saveBtn" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <>
                <input type="checkbox" onChange={() => TaskCompletion(index)} />
                {task}
                <div>
                  <button className="editBtn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                </div>

                <button className="delBtn" onClick={() => DelTask(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul> */}
      {/* <h2>Done List</h2>
      <ul id="donelist">
        {doneTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="undoBtn"
              onClick={() => undoTaskCompletion(index)}
            >
              Undo
            </button>
          </li>
        ))}
      </ul>
       */}
    </div>
  );
}

export default Todo2;
