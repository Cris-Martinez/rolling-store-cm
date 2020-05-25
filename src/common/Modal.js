import React, { Component } from 'react'
import { Modal, Input } from 'antd';

export class commonModal extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        ModalText: props.text,
        visible: true,
        confirmLoading: false,
        showInput: props.showInput,
      };
  }  
  
    
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = () => {
        this.setState({
          confirmLoading: true,
    });

    setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);

        this.props.setShow();
    };

    handleCancel = () => {
        this.setState({
          visible: false,
        });
        this.props.setShow();
    };

    render() {
        const { visible, confirmLoading, ModalText, showInput, valueInput } = this.state;

        return (
                <Modal
                    title={ModalText}
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                {
                  showInput ? <Input placeholder="Ingrese el numero de la tarjeta..." allowClear/> : null
                }

               </Modal>
        )
    }
}

export default commonModal

