/*
 * @Author: 赵东升
 * @Date: 2022/10/17
 */
import {Card, Form, Input, Checkbox, Button, message } from "antd";
import logo from "../../assets/logo.png"
import './index.scss'
import { useStore } from "../../store";
import  { useNavigate } from 'react-router-dom'

const Login = () => {
    const { loginStore } = useStore()
    const navigate = useNavigate()
    // 表单校验规则
    const phoneRules = [
        { required: true, message: '请输入11位手机号' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确手机号'}
    ]
    const codeRules = [{ required: true, message: '请输入验证码(246810)' }]
    // const checkRules = [{ required: true, message: '请选择'}]

    const onFinish = async (values) => {
        const { username, password } = values
        console.log('LoginStoreLoginStore', username, password);
        await loginStore.getToken(values)
         // 跳转首页
        navigate('/', { replace: true})
        message.success('This is a success message');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className="login">
            <Card className='login-container'>
                {/*<img className='login-logo' src={logo} alt=""/>*/}
                <div className='login-logo'>Edward</div>
                <Form
                    name="basic"
                    autoComplete="off"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={phoneRules}
                    >
                        <Input placeholder='请输入手机号' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={codeRules}
                    >
                        <Input.Password placeholder='请输入验证码(246810)'/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>已同意</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button style={{width: '100%'}} type="primary" htmlType="submit">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login