import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class EmployeeTurnover extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    return (
      <div>
        EmployeeTurnover
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeTurnover)
