import React, { FC, useState } from "react"

// antd
import { Button, Modal, Space, Typography } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"

interface DeleteStudentProps {
    id: string
}

const DeleteStudent: FC<DeleteStudentProps> = ({ id }) => {
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    const { removeStudentAsync } = useAppDispatch()

    const showModal = () => {
        setOpen(true)
    }

    const handleOk = (id: string) => {
        setConfirmLoading(true)
        setTimeout(() => {
            removeStudentAsync(id)
            setOpen(false)
            setConfirmLoading(false)
        }, 2000)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <Button type="link" size="small" onClick={() => showModal()}>
                <DeleteOutlined />
            </Button>
            <Modal
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={false}
                closable={false}
            >
                <Space direction="vertical">
                    <Typography.Title level={4}>
                        Are you sure you want to delete ?
                    </Typography.Title>
                    <Space direction="horizontal">
                        <Button onClick={() => handleCancel()}>Cancel</Button>
                        <Button
                            type="primary"
                            className="btn"
                            loading={confirmLoading}
                            onClick={() => handleOk(id)}
                        >
                            Delete
                        </Button>
                    </Space>
                </Space>
            </Modal>
        </>
    )
}

export default DeleteStudent
