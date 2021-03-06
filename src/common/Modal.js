import React, { Component } from 'react'
import { Modal } from 'antd';
import PaymentForm from './Card';

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
        const { visible, confirmLoading, ModalText, showInput } = this.state;
        const { valueTarjeta, onWriteNumberCard, validateValueCard } = this.props;
        const inModal = true;
        return ( 
          <div>              
                {
                  showInput ? 
                  <Modal
                    title={ModalText}
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    okButtonProps={{ hidden: true }}
                    cancelButtonProps={{ hidden: true }}
                  >
                    <PaymentForm inModal={inModal} handleOk={this.handleOk} handleCancel={this.handleCancel} valueTarjeta={valueTarjeta} onWriteNumberCard={onWriteNumberCard} validateValueCard={validateValueCard}/>
                  </Modal>
                  : null
                }  
          </div>            
        )
    }
}

export default commonModal

