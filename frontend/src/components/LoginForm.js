import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { SaltHash } from '../helpers/Helper';

class LoginForm extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        // format validation
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
               
                this.props.handleValues({
                    username: values.userName,
                    password: SaltHash(values.password, values.userName),
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{ 
                position:'fixed',
                bottom:40,
                width: 'fit-content', 
                marginLeft: '40px', 
                marginRight: '40px'
             }}>
                <Form.Item>
                    { getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" 
                            style={{color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="Username" 
                            autoComplete="off" />
                    ) }
                </Form.Item>
                <Form.Item>
                    { getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" 
                            style={{color: 'rgba(0,0,0,.25)' }} />} 
                            type="password" placeholder="Password" />
                    ) }
                </Form.Item>
                <Form.Item>
                    { getFieldDecorator('rememberMe', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    ) }
                    <Link to="/" style={{ float: "right" }}>Forget password?</Link>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ 
                        width:'50%',
                        letterSpacing:'0.05em',
                        backgroundColor:'#5f7ee3',
                        color:'#fac850',
                        border:'#5f7ee3 outset 0.07em',
                        fontWeight:'bold',
                        fontSize:'1.3em' }}>
                        Log in
                    </Button>
                    <Link to="/user/register" style={{ 
                        float: "right"
                        ,textAlign:'right'
                        }}>
                        Register now!
                    </Link>
                </Form.Item>
            </Form>
        );
    }
}

export default withRouter(Form.create()(LoginForm));
