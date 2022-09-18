import React, { FC, useState } from "react"
import { Button, Popover, Space, Typography } from "antd"

import "styles/popap/popap.scss"

interface PopapProps {
    children?: any
    student: any
}

const Popap: FC<PopapProps> = ({ children, student }) => {
    const [open, setOpen] = useState(false)

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
    }

    const content = (
        <Space direction="vertical">
            <Typography.Text>First Name: {student.first_name}</Typography.Text>
            <Typography.Text>Last Name: {student.last_name}</Typography.Text>
            <Typography.Text>E-mail: {student.email}</Typography.Text>
        </Space>
    )

    return (
        <div>
            <Popover
                content={content}
                placement="right"
                title="Student info"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
            >
                <Button type="link" size="small">
                    {children}
                </Button>
            </Popover>
        </div>
    )
}

export default Popap
