import './TaskCard.css'

const TaskCard = (props) => {
  console.log(props)
  return (
    <div className='TaskItem'>
      <h2 className="text-l font-bold mb-1">{props.title}</h2>
      <p className='text-gray-500'>{props.duedate && (
        <p className='text-gray-500'>Duedate: {props.duedate}</p>
      )}</p>

      <p className='text-gray-500'>{props.completingDate  && (
        <p className='text-gray-500' >Completed At: {props.completingDate}</p>
      )}</p>

      <p className='text-gray-500'>Assignee: {props.assignee}</p>
    </div>
  )
}

export default TaskCard