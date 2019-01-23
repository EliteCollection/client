
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Personal.module.scss'


import MyInformation from './MyInformation'
import MyAttendance from './MyAttendance'

export class Personal extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    return (
      <div className={styles.personalCss}>
        <div className="title">个人资料</div>
        <MyInformation></MyInformation>
        <div className="title">数据总览</div>
        <MyAttendance></MyAttendance>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
