import './index.css'

const TagItem = props => {
  const {details, changeClicked, isActive} = props

  const {displayText, optionId} = details

  const style = isActive ? 'golden' : ''

  const change = () => {
    changeClicked(optionId)
  }

  return (
    <li>
      <button type="button" className={`tag-btn ${style}`} onClick={change}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
