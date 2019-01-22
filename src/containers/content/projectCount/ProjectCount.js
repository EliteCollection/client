import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ProjectCount extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    return (
      <div>
        ProjectCount
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCount)
