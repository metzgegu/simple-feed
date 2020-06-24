import React from 'react'
import { getAccountInfo, getFeedItemList } from '../action-creator.async.js'
import Timeline from './Timeline.jsx'
require('../css/Home.styl')

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {},
      profile: {},
      accessToken: '',
      feedItemList: [],
      anErrorOccurred: false
    }
  }

  componentDidMount () {
    this.loadAccountInfo()
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { state } = this
    if (state.accessToken !== prevState.accessToken) this.loadContent()
  }

  loadContent = async () => {
    const fetchFeedItemList = await getFeedItemList(this.state.accessToken)
    let feedItemList = {}

    switch (fetchFeedItemList.status) {
      case 200:
        feedItemList = await fetchFeedItemList.json()
        this.setState({ feedItemList: feedItemList.feed_items ? feedItemList.feed_items.feed_items : [] })
        break
      default:
        console.error('Error while fetching feed items')
        this.setState({ anErrorOccurred: true })
    }
  }

  loadAccountInfo = async () => {
    const fetchAccountInfo = await getAccountInfo()
    let accountInfo = {}

    switch (fetchAccountInfo.status) {
      case 200:
        accountInfo = await fetchAccountInfo.json()
        this.setState({
          user: accountInfo.user,
          profile: accountInfo.profile,
          accessToken: accountInfo['access-token']
        })
        break
      default:
        console.error('Error while fetching account info')
        this.setState({ anErrorOccurred: true })
    }
  }

  render () {
    const { state } = this

    return (
      <div className='home__container'>
        <div className='home__title'>Feed news</div>
        {state.anErrorOccurred
          ? <div className='home__errorMessage'>An error occurred while fetching the data</div>
          : <Timeline feedItemList={state.feedItemList} />}
      </div>
    )
  }
}

export default Home
