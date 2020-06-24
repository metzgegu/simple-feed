import React from 'react'
import PropTypes from 'prop-types'
import { FEED_ITEM_TYPE } from '../helper.js'
import Publication from '../component/Publication.jsx'
require('../css/Timeline.styl')

export const Timeline = props => {
  const publicationFeedItemList = props.feedItemList.filter(feedItem => feedItem.type === FEED_ITEM_TYPE.PUBLICATION)

  return (
    <div className='timeline__container'>
      {publicationFeedItemList.map(item => (
        <Publication key={item.id} feedItem={item} />
      ))}
    </div>
  )
}

export default Timeline

Timeline.propTypes = {
  feedItemList: PropTypes.array
}

Timeline.defaultProps = {
  feedItemList: []
}
