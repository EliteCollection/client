import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateConfig } from '../actions/config';

import styles from './App.module.scss'

import Header from './layout/Header'
import LeftMenu from './layout/LeftMenu'
import RightContent from './layout/RightContent'

export class App extends Component {
  static propTypes = {
    theme: PropTypes.string,
  }
  componentDidMount() {
    this.props.updateConfig({theme: 'white'})
  }
  render() {
    const { content, page } = styles
    return (
      <div className={`${page} dark`}>
        <Header></Header>
        <div className={content}>
          <LeftMenu></LeftMenu>
          <RightContent></RightContent>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
