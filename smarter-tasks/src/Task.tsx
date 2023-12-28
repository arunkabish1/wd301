import "./TaskCard.css";

interface TaskProps {
  item: string;
  deleteTask: (task: string) => void;
  id: string;
  title: string;
  description: string;
  dueDate: string;
}
const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem">
        <div>
          <a href={`/tasks/${props.id || ""}`}>
            <h2 className="text-base font-bold my-1">{props.title}</h2>
          </a>
          <h2>{props.dueDate}</h2>
          <h2>
            Description: {props.description}
          </h2>
        </div>

        <button
          className="deleteTaskButton border-3 p-1 m-1 w-20 bg-red-300 border rounded flex-end hover:bg-red-800"
          onClick={() => props.deleteTask(props.title)}
        >
          Delete{" "}
        </button>
      </div>
  );
};

export default Task;
