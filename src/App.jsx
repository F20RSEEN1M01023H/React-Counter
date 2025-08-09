import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Todo from "./Todo";

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-300 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        React Practice Project
      </h1>

      {/* Counter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Counter</h2>
        <p className="text-lg text-gray-700 mb-6">
          Simple React counter for practice.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 text-2xl font-bold bg-amber-900 rounded-lg hover:bg-red-600"
          >
            -
          </button>
          <h3 className="text-2xl font-semibold text-gray-800">{count}</h3>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 text-2xl font-bold bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Link to Todo Page */}
      <Link
        to="/todo"
        className="px-6 py-3 bg-lime-900 text-white rounded-lg hover:bg-gray-950"
      >
        Visit Todo App
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CounterPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

function TodoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-400 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">
          Todo List
        </h2>
        <Todo />
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-950"
        >
          Back to Counter
        </Link>
      </div>
    </div>
  );
}
