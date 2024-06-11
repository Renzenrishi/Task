import './index.css'

const TaskItem = props => {
  const {details} = props

  const {taskName, taskTag} = details

  const capitalizedTaskTag =
    taskTag.charAt(0).toUpperCase() + taskTag.slice(1).toLowerCase()

  return (
    <li className="task-item">
      <p>{taskName}</p>
      <p className="golden">{capitalizedTaskTag}</p>
    </li>
  )
}

export default TaskItem
