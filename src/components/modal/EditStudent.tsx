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

interface IFileds {
    name: string[]
    value: string
}

const EditStudent: FC<IStudents> = ({
    id,
    study_group_id,
    first_name,
    last_name,
    email,
}) => {
    const [open, setOpen] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [studentName, setName] = useState(first_name)
    const [studentLastName, setLastName] = useState(last_name)
    const [studentEmail, setStudentEmail] = useState(email)
    const [fields, setFields] = useState([
        {
            name: ["first_name"],
            value: first_name,
        },
        {
            name: ["last_name"],
            value: last_name,
        },
        {
            name: ["email"],
            value: email,
        },
    ])

    const { editStudentAsync } = useAppDispatch()

    const showModal = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const submitForm = (values: inputValues) => {
        setConfirmLoading(true)
        setTimeout(() => {
            editStudentAsync({
                id,
                study_group_id,
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
            <Button type="link" size="small" onClick={() => showModal()}>
                <EditOutlined />
            </Button>
            <Modal
                visible={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={false}
                closable={false}
            >
                <Space direction="vertical" className="w100">
                    <Form fields={fields} autoComplete="off">
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
                            Edit
                        </Button>
                    </Space>
                </Space>
            </Modal>
        </>
    )
}

export default EditStudent
