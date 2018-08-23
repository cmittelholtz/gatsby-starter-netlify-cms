import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const SpeakerTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const SpeakerContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <SpeakerContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

SpeakerTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Speaker = ({ data }) => {
  const { markdownRemark: speaker } = data

  return (
    <SpeakerTemplate
      content={speaker.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${speaker.frontmatter.title} | Speaker`} />}
      title={speaker.frontmatter.title}
    />
  )
}

Speaker.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Speaker

export const pageQuery = graphql`
  query SpeakerByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
