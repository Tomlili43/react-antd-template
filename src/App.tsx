import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import './App.css';
const App: React.FC = () => {
  
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  
  return(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F2F5',
        position: 'absolute',
      }}
      >
      <div 
        style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '25px',
        flexDirection: 'row' 
        }}>
        <img 
          src='https://hkaift.com/wp-content/uploads/2022/10/Group-1.png'
          alt="Logo" 
          style={{
            width: '60px',
            height: '60px',
          }}
        />
        
        <h2
          style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#222",
              marginTop: "1rem",
              marginLeft: "1rem",

          }}
          >亚马逊电商授权登录
        </h2>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          // marginTop: '15%',
          marginBottom: '25%',
        }} 
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button"
          size='large'
          style={{
            width: '200px',
          }}
          >
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
        <Form.Item>
          <Checkbox
            // checked={checked} 
            // onChange={onChange}
            style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#222",
                marginBottom: "0.5rem",

              }}
            >阅读并同意
          </Checkbox>
        </Form.Item>
      </Form>
    </div>

)};

export default App;