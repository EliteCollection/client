import React from 'react'

import { Modal } from 'antd';

class Baoxiao extends React.Component {
  state = { visible: false }

 
  componentDidMount() {
    this.showModal()
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.props.openShortcutEntry()
  }

  handleCancel = (e) => {
    console.log(e);
    this.props.openShortcutEntry()
  }

  render() {
    return (
      <Modal
        title="我的报销"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

export default Baoxiao