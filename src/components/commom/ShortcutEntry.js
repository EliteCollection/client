import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import  styles from './ShortcutEntry.module.scss'
export class ShortcutEntry extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    const HeaderIcon = this.props.HeaderIcon
    const entryArray = [{name:'申请加班',icon: 'icon-moban'},{name: '微博周报',icon: 'icon-weibo'},{name:'申请报销',icon: 'icon-baoxiao'}, {name:'通讯搜索',icon: 'icon-tongxun'}, {name:'发布公告',icon: 'icon-fabugonggao'}]
    return (
      <div className={styles.entryBox}>
        {
          entryArray.map((item,index) => {
            return (
              <div className={`${styles.itemBox} pointer`} key={index}>
                <HeaderIcon  type={item.icon}></HeaderIcon>  {item.name}
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
