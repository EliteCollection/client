
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Personal.module.scss'

import ShortcutEntry from './ShortcutEntry'
import MyAttendance from './MyAttendance'

export class Personal extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    return (
      <div className={styles.personalCss}>
        <div className="title">快捷入口</div>
        <ShortcutEntry></ShortcutEntry>
        <div className="title">我的考勤</div>
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
