import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment';

import { Radio, DatePicker } from 'antd';

import css from './MyAttendance.module.scss'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export class MyAttendance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'year',
      defaultYear: [],
      defaultMouth: '',
      defaultDay:'',
      attendanceData: []
    }
  }
  componentWillMount() {
    let nowDate = new Date().toLocaleString()
    this.setState({
      defaultYear:[
        `${nowDate.slice(0,4)}-01-01`, nowDate
      ],
      defaultMouth: nowDate.slice(0,7),
      defaultDay:nowDate,
    })
    const attendanceData = require('../../../mockdata/myAttendance')
    this.setState(
      { attendanceData }
    )
  }
  static propTypes = {
    theme: PropTypes.string
  }
  disabledStartDate = (current) => {
    return current && current > moment().endOf('day');
  }
  handleSizeChange({target}) {
    this.setState({
      type: target.value
    })
  }
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };
  render() {
    const { type, defaultYear, defaultMouth, defaultDay, attendanceData } = this.state
    const dateFormat = 'YYYY-MM-DD';
    const weekFormat = 'YYYY-MM-DD';
    const monthFormat = 'YYYY-MM';
    return (
      <div className={css.attendanceCss}>
        <div className={css.headerCss}>
          <Radio.Group value={type} onChange={(val) => this.handleSizeChange(val)}>
            <Radio.Button value="year">年</Radio.Button>
            <Radio.Button value="month">月</Radio.Button>
            <Radio.Button value="week">周</Radio.Button>
          </Radio.Group>
          <div className = {css.pickerCss}>
            {type === 'year' ? <RangePicker onOpenChange = {this.onOpenChange}
              onChange={this.onChange}
              disabledDate={this.disabledStartDate}
              defaultValue={[moment(defaultYear[0], dateFormat), moment(defaultYear[1], dateFormat)]}
              /> : null}
            {type === 'month' ? <MonthPicker
              onChange={this.onChange}
              disabledDate={this.disabledStartDate}
              defaultValue={moment(defaultMouth, monthFormat)}
              placeholder="Select month" /> : null}
            {type === 'week' ? <WeekPicker 
              onChange={this.onChange} 
              disabledDate={this.disabledStartDate}
              defaultValue={moment(defaultDay, weekFormat)}
              placeholder="Select week" /> : null}
          </div>
        </div>
        <div className={css.contentCss}>
        {
          attendanceData.map((item)=>{
            return(
              <div className={css.itemBoxCss}>
                <div>
                  {item.name}
                  <div className={css.textCss}>
                    {item.value}
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAttendance)
