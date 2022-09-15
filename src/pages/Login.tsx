import React, { FC } from "react"

// antd
import { Layout, Row } from "antd"

// components
import LoginForm from "components/auth/LoginForm"

const Login: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <LoginForm />
            </Row>
        </Layout>
    )
}

export default Login
