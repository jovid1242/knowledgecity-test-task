import React, { FC, useMemo } from "react"
import StudentsList from "components/students/StudentsList"

// antd
import { Layout, Typography } from "antd"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import { useAppDispatch } from "hooks/useAppDispatch"

// style
import "styles/students/students.scss"
import Footer from "components/footer"
import AddStudent from "components/modal/AddStudent"

const { Title } = Typography

const UserList: FC = () => {
    const { getStudent } = useAppDispatch()

    useMemo(() => {
        getStudent()
    }, [])

    return (
        <Layout>
            <div className="students-list container">
                <div className="students-list__wrapper">
                    <div className="head">
                        <Typography.Title level={2}>User List</Typography.Title>
                        <AddStudent />
                    </div>
                    <div className="top-head"></div>
                    <StudentsList />
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default UserList
