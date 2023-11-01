import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props

  return (
    <div className="repository-item-cont">
      <img
        className="repo-item-image"
        src={repositoryItemDetails.avatarUrl}
        alt={repositoryItemDetails.name}
      />
      <h1>{repositoryItemDetails.name}</h1>
      <div>
        <div className="icon-paragraph">
          <img
            className="icon-img"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{repositoryItemDetails.starsCount}</p>
        </div>

        <div className="icon-paragraph">
          <img
            className="icon-img"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{repositoryItemDetails.forksCount}</p>
        </div>
        <div className="icon-paragraph">
          <img
            className="icon-img"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{repositoryItemDetails.issuesCount}</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
