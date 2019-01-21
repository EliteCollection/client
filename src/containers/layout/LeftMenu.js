import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './LeftMenu.module.scss'
export class LeftMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeMenu: ''
    }
  }
  
  static propTypes = {
    theme: PropTypes.string
  }
  changeMenu(item) {
    this.setState({
      activeMenu: item.title
    })
  }
  render() {
    const { menu, menuTitle, menuItem, activeItem } = styles
    const activeMenu = this.state.activeMenu || '个人中心'
    const array =[
      {
        title: '基础',
        children: [
          { title: '个人中心', key: '1-1'},
          { title: '加班管理', key: '1-2'},
          { title: '微博周报', key: '1-3'}
        ]
      },
      {
        title: '人事', 
        children: [
          { title: '人事统计', key: '2-1'},
          { title: '员工异动', key: '2-2'},
          { title: '离职管理', key: '2-3'},
          { title: '转正管理', key: '2-4'},
        ]
      },
      {
        title: '项目', 
        children: [
          { title: '项目统计', key: '3-1'},
          { title: '项目申请', key: '3-2'},
          { title: '项目列表', key: '3-3'},
          { title: '归档项目', key: '3-4'},
        ]
      }
    ]
    return (
        <div className={menu}>
          {
            array.map( (item,index) => {
              return (
                <div key={index}> 
                  <div className={menuTitle}>{item.title}</div>
                  {
                    item.children.map((child,childIndex)=>{
                      return (
                        <div 
                          key={`${index}${childIndex}`}  
                          className={ (activeMenu === child.title) ? `${menuItem} ${activeItem}` : menuItem }
                          onClick={()=>{this.changeMenu(child)}}
                        >
                          {child.title}
                        </div>
                      )  
                    })
                  }
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu)
