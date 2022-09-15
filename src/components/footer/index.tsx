import React, { FC } from "react"
import { ExportOutlined } from "@ant-design/icons"
import { Button, Space, Typography } from "antd"

// styles
import "styles/footer/footer.scss"
import { useAppDispatch } from "hooks/useAppDispatch"

const Footer: FC = () => {
    const { logout } = useAppDispatch()

    return (
        <div className="footer">
            <div className="footer__wrapper">
                <Button type="link" size="small" onClick={() => logout()}>
                    <Space direction="horizontal" size="small">
                        <ExportOutlined />
                        <Typography.Text strong>Log Out</Typography.Text>
                    </Space>
                </Button>
            </div>
        </div>
    )
}

export default Footer
