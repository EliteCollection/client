import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Header.module.scss'

import { Icon, Menu, Dropdown } from 'antd'

const HeaderIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1024785_cgx2z5f7c2h.js', // 在 iconfont.cn 上生成
});

export class Header extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

 
  render() {
    const { header, lf, logo, mg, rt, theme, user } = styles
    const themeMenu = (
      <Menu style={{width: 120}}>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">黑夜</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">白天</a>
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
      <div className={header}>
        <div className={lf}>
          <div className={logo}></div>
          <div className={mg}>旗开俱乐部</div>
        </div>
        <div className={rt}>
          <Dropdown placement='bottomCenter'  className={theme}  overlay={themeMenu}>
            <div>
              <HeaderIcon type='icon-theme' className={styles.mg}></HeaderIcon>
              主题
            </div>
          </Dropdown>
          <Dropdown placement='bottomCenter'  className={theme}  overlay={userMenu}>
          <div className={user}>
            <Icon type='user' className={styles.mg}></Icon>
            董事长
          </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
