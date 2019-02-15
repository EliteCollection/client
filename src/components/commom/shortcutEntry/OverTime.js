import React from 'react'
import moment from 'moment';
import { Modal, Form, TimePicker, DatePicker, Input } from 'antd';
const TextArea = Input.TextArea
class OverTime extends React.Component {
  state = {
    visible: false
  };

  componentDidMount() {
    const { form } = this.props
    this.showModal()
    // 设置默认值方法1
    form.setFieldsValue({
      overtimeDay:  moment(new Date()),
      overtimeTime: moment('17:30:00','HH:mm:ss'),
      reason: ''
    })
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  closeModal = () => {
    this.setState({
      visible: false,
    });
    this.props.openShortcutEntry()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 获取默认值1
        const day = moment(values.overtimeDay).format('YYYY-MM-DD')
        const time = moment(values.overtimeTime).format('HH:mm:ss')
        console.log('接口需要的入参为：',values.reason,day,time)
       
      } else {
        console.log(err)
      }
    });
  }

  handleOk = (e) => {
    this.handleSubmit(e)
  }
  handleCancel = () => {
    this.closeModal()
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 19 },
      },
    };
    return (
      <Modal
        title="加班申请"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width = {650}
        maskClosable = {false}
      >
        <Form >
          <Form.Item {...formItemLayout} label='加班开始时间' colon>
            <Form.Item
              style={{ display: 'inline-block', width: '195px' }}
            >
            {getFieldDecorator('overtimeDay', {
                rules: [{ required: true, message: '请选择加班日期' }],
              })( 
              <DatePicker style={{width: 195}} /> 
            )}
            </Form.Item>

            <span style={{ display: 'inline-block', width: '24px', textAlign: 'center' }}>
              -
            </span>
            
            <Form.Item 
            style={ { display: 'inline-block', width: '195px' }}>
              {getFieldDecorator('overtimeTime', {
                rules: [{ required: true, message: '请选择加班时间' }],
              })( 
              <TimePicker style={{width: 195}} minuteStep={30} secondStep={60} />
            )}
            </Form.Item>
          </Form.Item>
          <Form.Item {...formItemLayout} label='加班原因'  colon>
            {getFieldDecorator('reason', {
              rules: [{ required: true, message: '请填写加班原因' }],
            })(
              <TextArea style={{width:  415}} rows={4}  placeholder ='请填写加班原因'/>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
const OverTimeForm = Form.create({ name: 'overtimeForm',
// 设置默认值2
//  mapPropsToFields(props) {
  // 这里设置表单的默认值
  // return {
  //   overtimeDay: Form.createFormField({
  //     ...props.overtimeDay,
  //     value: moment(props.overtimeDay.value),
  //   }),
  //   overtimeTime: Form.createFormField({
  //     ...props.overtimeDay,
  //     value: moment(props.overtimeTime.value, 'HH:mm:ss'),
  //   }),
  //   reason: Form.createFormField({
  //     ...props.overtimeDay,
  //     value: props.reason.value,
  //   }),
  // };
// }, 
})(OverTime);
export default OverTimeForm