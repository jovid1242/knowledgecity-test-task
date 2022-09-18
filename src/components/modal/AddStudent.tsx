import React, { FC, useEffect, useState } from "react"

// antd
import { Button, Form, Input, Modal, Space, Typography } from "antd"
import { EditOutlined, RightCircleOutlined } from "@ant-design/icons"

// models
import { IStudents } from "models/students"
import { rules } from "utils/rules"
import { useAppDispatch } from "hooks/useAppDispatch"

interface inputValues {
    studentName: string
    studentLastName: string
    studentEmail: string
}

const AddStudent: FC = () => {
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [studentName, setName] = useState("")
    const [studentLastName, setLastName] = useState("")
    const [studentEmail, setStudentEmail] = useState("")

    const { addStudentAsync } = useAppDispatch()

    const showModal = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const submitForm = (values: inputValues) => {
        setConfirmLoading(true)
        setTimeout(() => {
            addStudentAsync({
                id: Math.floor(Math.random() * 1000),
                study_group_id: Math.floor(Math.random() * 10),
                first_name: values.studentName,
                last_name: values.studentLastName,
                email: values.studentEmail,
            })
            setOpen(false)
            setConfirmLoading(false)
        }, 2000)
    }
    return (
        <>
            <Button
                type="primary"
                htmlType="submit"
                className="btn"
                onClick={() => showModal()}
            >
                Add New student
            </Button>
            <Modal
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={false}
                closable={false}
            >
                <Space direction="vertical" className="w100">
                    <Form autoComplete="off">
                        <Form.Item name="first_name">
                            <Input
                                size="middle"
                                className="form-input"
                                placeholder="first_name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item name="last_name">
                            <Input
                                size="middle"
                                className="form-input"
                                placeholder="last_name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item name="email">
                            <Input
                                size="middle"
                                className="form-input"
                                placeholder="email"
                                onChange={(e) =>
                                    setStudentEmail(e.target.value)
                                }
                            />
                        </Form.Item>
                    </Form>
                    <Space direction="horizontal">
                        <Button onClick={() => handleCancel()}>Cancel</Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={confirmLoading}
                            className="btn"
                            onClick={() =>
                                submitForm({
                                    studentName,
                                    studentLastName,
                                    studentEmail,
                                })
                            }
                            block
                        >
                            Add
                        </Button>
                    </Space>
                </Space>
            </Modal>
        </>
    )
}

export default AddStudent
