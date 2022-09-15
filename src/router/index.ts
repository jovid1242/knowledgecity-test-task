import React from "react"

// components
import Login from "pages/Login"
import Students from "pages/UserList"

// type rout
export interface IRoute {
    path: string
    element: React.ComponentType
    exact?: boolean
}

export enum RouteName {
    LOGIN = "/login",
    STUDENTS = "/students",
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteName.LOGIN,
        exact: true,
        element: Login,
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: RouteName.STUDENTS,
        exact: true,
        element: Students,
    },
]
