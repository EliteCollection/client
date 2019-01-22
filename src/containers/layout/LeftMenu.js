import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';

import styles from './LeftMenu.module.scss'
export class LeftMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenuPath:''
    }
  }
  componentWillMount() {
    this.setState({
      activeMenuPath: this.props.location.pathname
    })
  }
  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location
    if(pathname !== this.props.location.pathname) {
      this.setState({
        activeMenuPath: pathname
      })
    }
  }
  static propTypes = {
    theme: PropTypes.string
  }
  changeMenu(item) {
    if(item.path === this.props.location.pathname) return
    this.props.history.push({pathname:item.path, search:'theme=red'})
  }
  render() {
    const { menu, menuTitle, menuItem, activeItem } = styles
    const activeMenuPath = this.state.activeMenuPath || '/personal'
    let array = require('../../mockdata/menu')
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
                          className={ (activeMenuPath === child.path) ? `${menuItem} ${activeItem}` : menuItem }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftMenu))
