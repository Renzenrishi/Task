import './index.css'

const TagItem = props => {
  const {details, changeActiveId} = props

  const {displayText, optionId} = details

  return (
    <li>
      <button
        type="button"
        className="tag-btn"
        onClick={() => changeActiveId(optionId)}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
