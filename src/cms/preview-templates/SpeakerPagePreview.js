import React from 'react'
import PropTypes from 'prop-types'
import { SpeakerTemplate } from '../../templates/speaker'

const SpeakerPagePreview = ({ entry, widgetFor }) => (
  <SpeakerTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

SpeakerPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SpeakerPagePreview
