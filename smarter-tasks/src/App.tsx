import React from 'react';
import './App.css';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList tasks={[]}/>
    </div>
  );
}
export default App;