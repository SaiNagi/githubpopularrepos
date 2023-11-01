// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, changeActiveLanguageId, selectedItem} = props

  const sendSelLanguageId = () => {
    changeActiveLanguageId(itemDetails.id)
  }

  const giveClassName = () =>
    selectedItem === itemDetails.id ? 'selected-btn' : ''

  return (
    <li>
      <button
        className={`filter-btn ${giveClassName()}`}
        type="button"
        onClick={sendSelLanguageId}
      >
        {itemDetails.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
