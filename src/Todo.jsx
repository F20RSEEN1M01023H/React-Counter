import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText("");
  }
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <div>
        <form
          className="flex mb-4 gap-2"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
        >
          <input
            className="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            value={text}
            placeholder="Add a text here"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-amber-500 rounded-lg hover:bg-green-600"
          >
            Add
          </button>
        </form>
      </div>

      <ul>
        {tasks.length === 0 && (
          <li className="text-gray-500 text-center mb-2">No tasks yet</li>
        )}
        {tasks.map((task) => (
          <li
            key={task.id}
            className="px-3 py-1 mb-2 flex justify-between items-center bg-gray-100 rounded-lg"
          >
            <span
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
