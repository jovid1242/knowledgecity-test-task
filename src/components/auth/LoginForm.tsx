import React, { FC } from "react"

// antd
import { Button, Checkbox, Form, Input, Space, Typography } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"
import { useTypedSelector } from "hooks/useTypedSelector"

// utils
import { rules } from "utils/rules"

// icons
import logo from "assets/images/Logo.svg"
import userIcon from "assets/images/user.svg"
import passIcon from "assets/images/password.svg"
import { RightCircleOutlined } from "@ant-design/icons"

// style
import "styles/auth/loginForm.scss"

// type input user value
interface InputValue {
    username: string
    password: string
}

const { Text, Title } = Typography

const LoginForm: FC = () => {
    const { login } = useAppDispatch()
    const { isError, isLoading } = useTypedSelector((state) => state.auth)

    const submitForm = (values: InputValue) => {
        login(values.username, values.password)
    }

    const iconInputs = (icon: string) => {
        return (
            <img
                src={icon}
                alt="input icon"
                height={30}
                style={{ margin: "0", float: "left" }}
            />
        )
    }

    return (
        <div className="form-wrapper">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            {isError && (
                <div>
                    <Text type="danger">{isError}</Text>
                </div>
            )}
            <div className="form-header">
                <Text strong>Welcome to the Learning Management System</Text>
                <Text>Please log in to continue</Text>
            </div>
            <Form
                initialValues={{ remember: true }}
                onFinish={submitForm}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        rules.required(
                            "Пожалуйста, введите ваше имя пользователя!"
                        ),
                    ]}
                >
                    <Input
                        prefix={iconInputs(userIcon)}
                        size="middle"
                        className="form-input"
                        placeholder="username"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[rules.required("Пожалуйста, введите ваш пароль!")]}
                >
                    <Input.Password
                        prefix={iconInputs(passIcon)}
                        size="middle"
                        className="form-input"
                        placeholder="password"
                    />
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 1, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                        className="form-btn btn"
                        shape="round"
                        block
                    >
                        Log in
                        <RightCircleOutlined style={{ fontSize: "24px" }} />
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm
