import React from 'react';
import TaskCard from "./TaskCard";

interface myProps {}

let App: React.FunctionComponent<myProps> = () => {
  return (
    <div className="pl-20">
      <h1 className="text-2xl font-bold text-gray-500">Smarter Tasks</h1>
      <p className="text-gray-500 mb-5">Project: Graduation Project</p>
      <div className="flex gap-4">
        <div className="border-2 p-4 border-red-500 rounded-lg ">
          <h1 className="text-center text-xl font-bold text-red-500 mb-5">Pending</h1>
          <TaskCard title="Build the website" dueDate="2022-01-01" assigneeName="Arun"/>
          <TaskCard title="Add blog" dueDate="2022-01-01" assigneeName="Kabish" />
          <h2 className="font-bold text-gray-500 p-2 "> + New Task</h2>
        </div>
        <div className="border-2 p-4 border-green-500 rounded-lg">
          <h1 className="text-center text-xl font-bold text-green-500 mb-5">Done</h1>
          <div>
            <TaskCard title="Design mockup" assigneeName="Arun" completedAtDate="2022-01-01" />
            <TaskCard title="Approval from Principal" assigneeName="Kabish" completedAtDate="2022-01-01"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
