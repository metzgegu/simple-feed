import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

export const PublicationContent = props => (
  <CardContent>
    <Typography variant='body2' color='textSecondary' component='div'>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    </Typography>
  </CardContent>
)

export default PublicationContent

PublicationContent.propTypes = {
  description: PropTypes.string
}

PublicationContent.defaultProps = {
  description: ''
}
