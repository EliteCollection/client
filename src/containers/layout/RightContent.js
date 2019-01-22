import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './RightContent.module.scss'

import Personal from '../content/personal/Personal'
import PersonnelCount from '../content/personnelCount/PersonnelCount'
import OverTime from '../content/overTime/OverTime'
import Weekly from '../content/weekly/Weekly'
import EmployeeTurnover from '../content/employeeTurnover/EmployeeTurnover'
import LeaveManage from '../content/leaveManage/LeaveManage'
import PositiveManage from '../content/positiveManage/PositiveManage'
import ProjectCount from '../content/projectCount/ProjectCount'
import ProjectApply from '../content/projectApply/ProjectApply'
import ProjectList from '../content/projectList/ProjectList'
import ProjectFinish from '../content/projectFinish/ProjectFinish'

// router
import {  Route, Switch, Redirect, withRouter } from 'react-router-dom';

export class RightContent extends Component {
  static propTypes = {
    theme: PropTypes.string
  }
  componentWillMount(){
    sessionStorage.getItem('isLogin') || this.props.history.push('/login') 
  }
  render() {
    const { content } = styles
    return (
      <div className={content}>
        <Switch>
          <Route path='/personal' component={Personal}/>
          <Route path='/personnelCount' component={PersonnelCount}/>
          <Route path='/overTime' component={OverTime}/>
          <Route path='/weekly' component={Weekly}/>
          <Route path='/employeeTurnover' component={EmployeeTurnover}/>
          <Route path='/leaveManage' component={LeaveManage}/>
          <Route path='/positiveManage' component={PositiveManage}/>
          <Route path='/projectCount' component={ProjectCount}/>
          <Route path='/projectApply' component={ProjectApply}/>
          <Route path='/projectList' component={ProjectList}/>
          <Route path='/projectFinish' component={ProjectFinish}/>
          {
            sessionStorage.getItem('isLogin') ? 
            <Redirect from='/' to='/personal'></Redirect> : 
            <Redirect from='/' to='/login'></Redirect>
          }
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(RightContent))
