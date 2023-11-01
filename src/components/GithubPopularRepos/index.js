import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeLanguageId: 'ALL',
    isLoading: false,
    reposData: [],
    isConnectionLast: false,
  }

  componentDidMount() {
    this.getItems()
  }

  changeActiveLanguageId = languageId => {
    this.setState({activeLanguageId: languageId}, () => {
      this.getItems()
    })
  }

  getItems = async () => {
    const {activeLanguageId} = this.state
    this.setState({isLoading: true})

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageId}`

    const response = await fetch(apiUrl)
    const data = await response.json()

    console.log(data)

    if (response.status === 200) {
      const updatedData = data.popular_repos.map(repo => ({
        name: repo.name,
        id: repo.id,
        issuesCount: repo.issues_count,
        forksCount: repo.forks_count,
        starsCount: repo.stars_count,
        avatarUrl: repo.avatar_url,
      }))

      this.setState({reposData: updatedData, isLoading: false})
    } else {
      this.setState({reposData: [], isLoading: false, isConnectionLast: true})
    }
  }

  renderFailureView = () => (
    <div className="git-hub-main-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="fail-heading">Something Went Wrong</h1>
    </div>
  )

  render() {
    const {
      activeLanguageId,
      reposData,
      isLoading,
      isConnectionLast,
    } = this.state

    return (
      <div className="git-hub-repos-main-cont">
        <h1>Popular</h1>
        <ul className="Language-filter-items-nav">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              itemDetails={eachItem}
              key={eachItem.id}
              changeActiveLanguageId={this.changeActiveLanguageId}
              selectedItem={activeLanguageId}
            />
          ))}
        </ul>
        {isConnectionLast ? (
          this.renderFailureView()
        ) : (
          <div className="repository-list-cont">
            {isLoading ? (
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            ) : (
              reposData.map(repository => (
                <RepositoryItem
                  repositoryItemDetails={repository}
                  key={repository.id}
                />
              ))
            )}
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
