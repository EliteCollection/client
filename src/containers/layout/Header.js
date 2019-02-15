import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Header.module.scss'

import ShortcutEntry from '../../components/commom/ShortcutEntry.js'

import { Icon, Menu, Dropdown } from 'antd'

import { updateConfig } from '../../actions/config';

const HeaderIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1024785_mpvn1lelzn.js', // 在 iconfont.cn 上生成
});

export class Header extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  switchTheme = ({item, key, keyPath}) => {
  console.log(this.props)
  switch (key) {
    case '0':
      this.props.updateConfig({theme: 'light'});
      break;
    case '1':
      this.props.updateConfig({theme: 'dark'});
      break;
    default:
      this.props.updateConfig({theme: 'green'});
      break;
  }
 }
  render() {
    const { header, lf, logo, mg, rt, themeCss, user, name } = styles
    const { theme } = this.props
    const defaultKey = theme === 'light' ? '0' : '1' 
    console.log(defaultKey)
    const themeMenu = (
      <Menu selectedKeys={[defaultKey]} style={{width: 120}}>
        <Menu.Item key="0" onClick={this.switchTheme} >
          <span>白天</span>
        </Menu.Item>
        <Menu.Item key="1" onClick={this.switchTheme} >
          <span>黑夜</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>护眼</Menu.Item>
      </Menu>
    )
    const userMenu = (
      <Menu style={{width: 120}}>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">注销登录</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
        </Menu.Item>
        <Menu.Item key="3" >个人设置</Menu.Item>
      </Menu>
    )
    return (
      <div className={ `${header} bd-bottom`}>
        <div className={lf}>
          <div className={logo}></div>
          <div className={name}>旗开俱乐部</div>
        </div>
        <div>
        <ShortcutEntry HeaderIcon={HeaderIcon}></ShortcutEntry>
        </div>
        <div className={rt}>
          <Dropdown placement='bottomCenter'  className={themeCss}  overlay={themeMenu}>
            <div>
              <HeaderIcon type='icon-theme' className={mg}></HeaderIcon>
              主题
            </div>
          </Dropdown>
          <Dropdown placement='bottomCenter'  className={theme}  overlay={userMenu}>
          <div className={user}>
            <Icon type='user' className={mg}></Icon>
            董事长
          </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.config.theme
})

const mapDispatchToProps = (dispatch) => ({
  updateConfig: (config)=>dispatch(updateConfig(config))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
