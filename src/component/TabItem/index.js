import './index.css'

const TabItem = props => {
  const {data, isActive, btnClicked} = props
  const {displayText, tabId} = data

  const onBtnClicked = () => btnClicked(tabId)

  return (
    <li className="btn-div">
      <button
        type="button"
        onClick={onBtnClicked}
        className={isActive ? 'btn-clicked tab-btn' : 'tab-btn'}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
