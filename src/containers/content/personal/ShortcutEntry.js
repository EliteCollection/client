import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card } from 'antd';

import  styles from './ShortcutEntry.module.scss'
export class ShortcutEntry extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    const entryArray = ['申请加班', '微博周报', '申请报销', '通讯搜索', '发布公告']
    return (
      <div className={styles.entryBox}>
        {
          entryArray.map((item,index) => {
            return (
              <div className={`${styles.itemBox} pointer`} key={index}>
                {item}
              </div>
            )
          })
        }
      
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortcutEntry)
