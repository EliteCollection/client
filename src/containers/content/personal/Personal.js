
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Personal.module.scss'

import MyInformation from './MyInformation'
import MyAttendance from './MyAttendance'
import { Divider } from 'antd';

export class Personal extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    return (
      <div className={styles.personalCss}>
        {/* <Divider orientation="left" style={{fontSize: '13px', color: '#999'}}>个人资料</Divider> */}
        <div className="title">个人资料</div>
        <MyInformation></MyInformation>
        {/* <Divider orientation="left" style={{fontSize: '13px', marginTop: '50px', color: '#999'}}>数据总览</Divider> */}
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
