import React from 'react';
import './TaskCard.css'

interface TaskProps {
  title: string;
  duedate?: string; 
  completingDate?: string;
  assignee: string;
}
const TaskCard: React.FunctionComponent<TaskProps> = (props) => {
  console.log(props);
  return (
    <div className='TaskItem'>
      <h2 className="text-l font-bold mb-1">{props.title}</h2>
      {props.duedate && (
        <p className='text-gray-500'>Duedate: {props.duedate}</p>
      )}

      {props.completingDate && (
        <p className='text-gray-500'>Completed At: {props.completingDate}</p>
      )}

      <p className='text-gray-500'>Assignee: {props.assignee}</p>
    </div>
  );
}

export default TaskCard;
