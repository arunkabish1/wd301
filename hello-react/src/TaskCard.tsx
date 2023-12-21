import React from 'react';
import './TaskCard.css'

interface TaskProps {
  title: string;
  dueDate?: string; 
  completedAtDate?: string;
  assigneeName: string;
}
const TaskCard: React.FunctionComponent<TaskProps> = (props) => {
  console.log(props);
  return (
    <div className='TaskItem'>
      <h2 className="text-l font-bold mb-1">{props.title}</h2>
      {props.dueDate && (
        <p className='text-gray-500'>Due on: {props.dueDate}</p>
      )}

      {props.completedAtDate && (
        <p className='text-gray-500'>Completed on: {props.completedAtDate}</p>
      )}

      <p className='text-gray-500'>Assignee: {props.assigneeName}</p>
    </div>
  );
}

export default TaskCard;
