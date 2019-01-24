import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import css from './Pie.module.scss'
const echarts = require('echarts/lib/echarts');
// 引入饼型图
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');
require('echarts/lib/component/title');



export class Pie extends Component {
  constructor(props) {
    super(props)
    this.randomId = `bie${Math.floor(Math.random()*10000)}`
  }
  static propTypes = {
    data: PropTypes.array,
    value: PropTypes.number,
    name: PropTypes.string
  }
  componentDidMount() {
    const { value } = this.props
    const pieChart = echarts.init(document.getElementById(this.randomId));
    pieChart.setOption({
      title : {
        show: false,
        // text: this.props.name,
        // x:'center',
        // padding: 20
      },
      tooltip: {
        // position: ['50%', '0'],
        trigger: 'item',
        formatter: "{b}: {c}"
        // formatter: function (params) {
        //   return `${params.data.name}/应出勤：${params.data.value}/${value}`
        // }
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      // legend: {
      //   orient: 'horizontal',
      //   y: 'bottom',
      //   data:['实出勤','未出勤'],
      //   align: 'left'
      // },
      series: [
        {
          name:'我的出勤',
          type:'pie',
          // radius : '99%',
          center: ['50%', '50%'],
          color:[ '#5cadff','#ff9900',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
          // itemStyle: {
          // normal: {
          //   color: new echarts.graphic.LinearGradient(
          //     0, 0, 0, 1,
          //     [
          //       {offset: 0, color: '#83bff6'},
          //       {offset: 0.5, color: '#188df0'},
          //       {offset: 1, color: '#188df0'}
          //     ]
          //   )
          //   },
          //   emphasis: {
          //     color: new echarts.graphic.LinearGradient(
          //       0, 0, 0, 1,
          //       [
          //         {offset: 0, color: '#2378f7'},
          //         {offset: 0.7, color: '#2378f7'},
          //         {offset: 1, color: '#83bff6'}
          //       ]
          //       // [
          //       //   {offset: 0, color: '#ed4014'},
          //       //   {offset: 0.7, color: '#ed4014'},
          //       //   {offset: 1, color: '#ff9900'}
          //       // ]
          //     )
          //   }
          // },
          radius: ['50%', '65%'],
          avoidLabelOverlap: true,
          // label:{
          //   // position: 'inside'
          // },
          // label: {
          //   normal: {
          //     show: true,
          //     position: 'center'
          //   },
          //   emphasis: {
          //     show: true,
          //     textStyle: {
          //       fontSize: '30',
          //       fontWeight: 'bold'
          //     }
          //   }
          // },
          labelLine: {
           
            normal: {
              length:8,
              length2:8,
              show: true,
            },
           
          },
          data:this.props.data
        }
      ]
    })
  }
  render() {
    const { value, name } = this.props
    const { centerNumCss, itemBoxCss, titleCss, pieBoxCss } = css
    return (
      <div className={itemBoxCss}>
        <div className={titleCss}>
          {name}
        </div>
        <div className={pieBoxCss}>
          <div className={centerNumCss}>
            {value}
          </div>
           <div id={this.randomId} style={{height: '100%', width: '100%'}}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Pie)
