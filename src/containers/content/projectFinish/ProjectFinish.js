import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ProjectFinish extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    return (
      <div>
        ProjectFinish
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFinish)
