import React, { FC } from "react"

// antd
import { Space, Table, Typography } from "antd"
import type { ColumnsType } from "antd/es/table"

// components
import DeleteStudent from "components/modal/DeleteStudent"

// models
import { IStudents } from "models/students"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import EditStudent from "components/modal/EditStudent"
import Popap from "components/popover"

const columns: ColumnsType<IStudents> = [
    {
        title: "Name",
        dataIndex: "first_name",
        render: (text) => <Typography.Text>{text}</Typography.Text>,
    },
    {
        title: "E-mail",
        dataIndex: "email",
        render: (text, row) => (
            <Popap student={row} key={row.id}>
                <Typography.Text underline>{text}</Typography.Text>
            </Popap>
        ),
    },
    {
        title: "Action",
        dataIndex: "",
        render: (row) => (
            <Space direction="horizontal">
                <DeleteStudent id={row.id} />
                <EditStudent
                    id={row.id}
                    first_name={row.first_name}
                    last_name={row.last_name}
                    email={row.email}
                    study_group_id={row.study_group_id}
                />
            </Space>
        ),
    },
]

const StudentsList: FC = () => {
    const { tableIsLoading, students } = useTypedSelector(
        (state) => state.students
    )
    return (
        <div>
            <Table
                showHeader={false}
                rowKey="id"
                loading={tableIsLoading}
                columns={columns}
                dataSource={students}
                pagination={{ position: ["bottomCenter"], pageSize: 5 }}
            />
        </div>
    )
}

export default StudentsList
