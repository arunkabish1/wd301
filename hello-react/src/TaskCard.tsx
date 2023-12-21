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
        <p className='text-gray-500'>dueDate: {props.dueDate}</p>
      )}

      {props.completedAtDate && (
        <p className='text-gray-500'>Completed At: {props.completedAtDate}</p>
      )}

      <p className='text-gray-500'>assigneeName: {props.assigneeName}</p>
    </div>
  );
}

export default TaskCard;
