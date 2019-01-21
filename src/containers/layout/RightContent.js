import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './RightContent.module.scss'

import Personal from '../content/personal'
export class RightContent extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    const { content } = styles
    return (
      <div className={content}>
        <Personal></Personal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RightContent)
