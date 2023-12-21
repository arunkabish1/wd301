import Taskcard from "./TaskCard"

function App() {
  let mess = {}
  return (
    
    <div className="pl-20">
      <h1 className="text-2xl font-bold text-gray-500">Smarter Tasks</h1>
      <p className="text-gray-500 mb-5">Project: Graduation Project</p>
    <div className="flex gap-4">
    <div className="border-2 p-4 border-red-500 rounded-lg ">
      <h1 className="text-center text-xl font-bold  text-red-500 mb-5">Pending</h1>
      <Taskcard title="Build the website" duedate="2022-01-01" assignee="Arun"/>
      <Taskcard title="Add blog" duedate="2022-01-01" assignee="Kabish" />
      <h2 className="font-bold text-gray-500 p-2 "> + New Task</h2>
    </div>
    <div className="border-2 p-4 border-green-500 rounded-lg">
      <h1 className="text-center text-xl font-bold text-green-500 mb-5">Done</h1>
        <div>
          <Taskcard title="Design mockup" assignee="Arun" completingDate="2022-01-01" />
          <Taskcard title="Approval from Principal" assignee="Kabish" completingDate="2022-01-01"/>
        </div>
    </div>
  </div>
  </div>
   
  )
}

export default App
