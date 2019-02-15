import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import OverTime from './shortcutEntry/OverTime'
import Communication from './shortcutEntry/Communication'
import Baoxiao from './shortcutEntry/Baoxiao'
import WeiboBlog from './shortcutEntry/WeiboBlog'
import Notice from './shortcutEntry/Notice'

import css from './ShortcutEntry.module.scss'
export class ShortcutEntry extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  constructor(props) {
    super(props)
  
    this.state = {
      shortcutEntryModel: {
        overtime: false,
        blog: false,
        baoxiao: false,
        communication: false,
        notice: false,
      },
      fields: {
        overtimeDay: {
          value: new Date(),
        },
        overtimeTime: {
          value: '17:30:00',
        },
        reason: {
          valie: ''
        }
      },
    }
  }
  
  openShortcutEntry (key) {
    switch(key) {
      case 'overtime':
        console.log('打开加班快捷方式')
        this.setState({
          shortcutEntryModel: { ...this.state.shortcutEntryModel, overtime: !this.state.shortcutEntryModel.overtime }
        })
        break;
      case 'blog':
        console.log('打开周报快捷方式')
        this.setState({
          shortcutEntryModel: { ...this.state.shortcutEntryModel, blog: !this.state.shortcutEntryModel.blog }
        })
        break;
      case 'baoxiao':
        console.log('打开报销快捷方式')
        this.setState({
          shortcutEntryModel: { ...this.state.shortcutEntryModel, baoxiao: !this.state.shortcutEntryModel.baoxiao  }
        })
        break;
      case 'communication':
        console.log('打开通讯快捷方式')
        this.setState({
          shortcutEntryModel: { ...this.state.shortcutEntryModel, communication: !this.state.shortcutEntryModel.communication  }
        })
        break;
      case 'notice':
        console.log('打开公告快捷方式')
        this.setState({
          shortcutEntryModel: { ...this.state.shortcutEntryModel, notice: !this.state.shortcutEntryModel.notice }
        })
        break;
      default: 
    }
  }
  render() {
    const HeaderIcon = this.props.HeaderIcon
    const {overtime, communication, blog, baoxiao, notice}= this.state.shortcutEntryModel
    const entryArray = [
    {name: '申请加班', icon: 'icon-moban', key: 'overtime'},
    {name: '微博周报', icon: 'icon-weibo', key: 'blog'},
    {name: '申请报销', icon: 'icon-baoxiao', key: 'baoxiao'},
    {name: '通讯搜索',icon: 'icon-tongxun', key: 'communication'},
    {name: '发布公告',icon: 'icon-fabugonggao', key: 'notice'}]
    return (
      <div className={css.entryBox}>
        {
          entryArray.map((item,index) => {
            return (
              <div className={`${css.itemBox} pointer`} key={index} onClick={()=>{this.openShortcutEntry(item.key)}}>
                <HeaderIcon  type={item.icon}></HeaderIcon>  {item.name}
              </div>
            )
          })
        }
        {overtime && <OverTime {...this.state.fields}  openShortcutEntry = {() => this.openShortcutEntry('overtime')}></OverTime>}
        {communication && <Communication openShortcutEntry = {() => this.openShortcutEntry('communication')}></Communication>}
        {blog && <WeiboBlog openShortcutEntry = {() => this.openShortcutEntry('blog')}></WeiboBlog>}
        {baoxiao && <Baoxiao openShortcutEntry = {() => this.openShortcutEntry('baoxiao')}></Baoxiao>}
        {notice && <Notice openShortcutEntry = {() => this.openShortcutEntry('notice')}></Notice>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortcutEntry)
