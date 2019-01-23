import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import css from './MyInformation.module.scss'
import { Icon } from 'antd';

export class MyInformation extends Component {
  static propTypes = {
    theme: PropTypes.string
  }

  render() {
    const userType = this.props.userType === 'boy' ? css.boy : css.girl
    return (
      <div className={css.informationCss}>
        <div className={css.topContentCss}>
          <div className={`${css.headCss} ${userType}`}>
          </div>
          <div className={css.basicInfoCss}>
            <div className={css.username}>
              <div>
                <span className={css.nameText}>项洁洁</span> (技术人员)
              </div>
              <div className={css.editCss}>
                <Icon type='edit'></Icon> 修改
              </div>
            </div>
            <div className={css.line}></div>
            <div className={css.userdept}>
              技术中心-前端部-前端副组长
            </div>
          </div>
        </div>
        <div className={css.botContentCss}>
          <div>
          <Icon type='user'></Icon> 工号： L1988
          </div>
          <div>
          <Icon type='phone'></Icon> 手机号码： 18755489161
          </div>
          <div>
          <Icon type='email'></Icon> 邮箱： 18755489161@163.com
          </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInformation)
