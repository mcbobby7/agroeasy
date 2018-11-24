import React, { Component } from 'react';
import './style.css';

import { 
    Button,
    Checkbox,
    Form,
    Icon,
    Input,
    Modal,
    Tooltip
} from 'antd';

import {
    AGREEMENT,
    MESSAGE_1,
    MESSAGE_2,
    MESSAGE_3,
    MESSAGE_4,
    MESSAGE_5,
    MESSAGE_6,
    MESSAGE_7,
    MESSAGE_8,
    MESSAGE_9,
    LABEL_1,
    LABEL_2,
    LABEL_3,
    READ,
    TITLE
} from './constant';

const FormItem = Form.Item;

const SignupForm = Form.create()(
    class SignupForm extends React.Component {
        render() {
            const { form, onCancel, onCreate, visible } = this.props;
            const { getFieldDecorator } = form;

            const formItemLayout = {
                labelCol: {
                    sm: { span: 8 },
                    xs: { span: 20 },
                },
                wrapperCol: {
                    sm: { span: 16 },
                    xs: { span: 20 },
                },
            };
      
            return (
                <Modal
                    visible={visible}
                    title={TITLE}
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form 
                        layout="verticle"
                        className="signup_form"
                    >
                        <FormItem
                            {...formItemLayout}
                            label={LABEL_1}
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    message: { MESSAGE_1 }, type: 'email',
                                }, {
                                    message: { MESSAGE_2 }, required: true,
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem 
                            {...formItemLayout}
                            label={LABEL_2}
                        > 
                            {getFieldDecorator('firstname', {
                                rules: [{ message: { MESSAGE_3 }, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem 
                            {...formItemLayout}
                            label={LABEL_3}
                        >
                            {getFieldDecorator('lastname', {
                                rules: [{ message: { MESSAGE_4 }, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    Username&nbsp;
                                    <Tooltip title={MESSAGE_5}>
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            )}
                        >
                            {getFieldDecorator('username', {
                                rules: [{ message: { MESSAGE_6 }, required: true  }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Location"
                        >
                            {getFieldDecorator('title', {
                                rules: [{ message: { MESSAGE_7 }, required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Password"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    message: { MESSAGE_8 }, required: true,
                                }, {
                                    validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Confirm Password"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    message: { MESSAGE_9 }, required: true,
                                }, {
                                    validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>
                        <FormItem 
                            className="agreement_quote"
                        >
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>
                                    {READ} 
                                    <a href="">
                                        {AGREEMENT}
                                    </a>
                                </Checkbox>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                shape="circle"
                                className="signup-form-button"
                            > 
                                {TITLE}
                            </Button>
                        </FormItem>
                    </Form>
                </Modal>
            );
        }
    }
);

export default class Signup extends Component {
  state = {
      visible: false,
  };

  showModal = () => {
      this.setState({ visible: true });
  }

  handleCancel = () => {
      this.setState({ visible: false });
  }

  handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields(err => {
          if (err) {
              return;
          }

          form.resetFields();
          this.setState({ visible: false });
      });
  }

  saveFormRef = formRef => {
      this.formRef = formRef;
  }
 
  render() {
      return (
          <div>
              <h6 type="primary" onClick={this.showModal}>{TITLE}</h6>
              <SignupForm
                  wrappedComponentRef={this.saveFormRef}
                  visible={this.state.visible}
                  onCancel={this.handleCancel}
                  onCreate={this.handleCreate}
              />
          </div>
      );
  }
}
