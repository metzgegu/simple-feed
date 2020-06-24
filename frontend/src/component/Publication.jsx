import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { getAvatarLetters } from '../helper.js'
import PublicationContent from './PublicationContent.jsx'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
require('../css/Publication.styl')

class Publication extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLiked: false
    }
  }

  render () {
    const { props, state } = this

    const publication = props.feedItem.publication

    return (
      <Card className='publication__container'>
        <CardHeader
          avatar={
            <Avatar>
              {getAvatarLetters(publication.company.name)}
            </Avatar>
          }
          title={publication.poster.displayName}
          subheader={new Date(props.feedItem.date).toString()}
        />
        <PublicationContent description={publication.shared_job ? publication.shared_job.description_company : publication.content} />
        <CardActions>
          <IconButton
            aria-label='add to favorites'
            onClick={() => this.setState((prev) => ({ isLiked: !prev.isLiked }))}
          >
            <FavoriteIcon className={state.isLiked ? 'publication__liked' : 'publication__notLiked'} />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <Button
            size='small'
            color='primary'
            href={publication.shared_job ? publication.shared_job.external_url : publication.company.website}
          >
            En savoir plus
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default Publication

Publication.propTypes = {
  feedItem: PropTypes.object
}

Publication.defaultProps = {
  feedItem: {}
}
