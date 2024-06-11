import './App.css'

import {Component} from 'react'

import {v4} from 'uuid'

import TagItem from './components/TagItem'
import TaskItem from './components/TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    activeTag: '',
    taskName: '',
    taskTag: tagsList[0].optionId,
    taskList: [],
  }

  changeActiveId = id => {
    this.setState({activeTag: id})
  }

  getTaskName = event => {
    this.setState({taskName: event.target.value})
  }

  getTaskTag = event => {
    this.setState({taskTag: event.target.value})
  }

  addTask = event => {
    event.preventDefault()

    const {taskName, taskTag} = this.state

    const taskDetails = {
      id: v4(),
      taskName,
      taskTag,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, taskDetails],
    }))
  }

  renderTaskInput = () => {
    const {taskName} = this.state

    return (
      <>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          className="input-bar"
          placeholder="Enter the task here"
          value={taskName}
          onChange={this.getTaskName}
        />
      </>
    )
  }

  renderSelectEl = () => (
    <>
      <label htmlFor="tags">Tags</label>
      <select className="input-bar" onChange={this.getTaskTag}>
        {tagsList.map(each => (
          <option key={each.optionId} value={each.optionId}>
            {each.displayText}
          </option>
        ))}
      </select>
    </>
  )

  renderTasks = () => {
    const {taskList, activeTag} = this.state

    const filteredList = taskList.filter(task => task.taskTag === activeTag)

    const customList = activeTag === '' ? taskList : filteredList

    return (
      <>
        {customList.map(eachItem => (
          <TaskItem details={eachItem} key={eachItem.id} />
        ))}
      </>
    )
  }

  render() {
    const {taskList} = this.state

    return (
      <div className="home-page">
        <div className="create-task-container">
          <h1 className="task-heading">Create a task!</h1>
          <form className="form" onSubmit={this.addTask}>
            {this.renderTaskInput()}
            {this.renderSelectEl()}
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-container">
          <h1>Tags</h1>
          <ul className="tags-btn-container">
            {tagsList.map(eachTag => (
              <TagItem
                details={eachTag}
                key={eachTag.optionId}
                changeActiveId={this.changeActiveId}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          <ul className="task-container">
            {taskList.length === 0 ? (
              <p>No Tasks Added Yet</p>
            ) : (
              this.renderTasks()
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
