import { IStudents } from "models/students"

export interface StudentState {
    students: IStudents[]
    isError: string
    search: string
    tableIsLoading: boolean
}

export enum StudentActions {
    SET_STUDENT = "SET_STUDENT",
    SET_STUDENTS = "SET_STUDENTS",
    EDIT_STUDENTS = "EDIT_STUDENTS",
    DELETE_STUDENTS = "DELETE_STUDENTS",
    SET_IS_ERROR = "SET_IS_ERROR",
    SET_SEARCH = "SET_SEARCH",
    SET_IS_TABLE_LOADING = "SET_IS_TABLE_LOADING",
}

export interface SetStudent {
    type: StudentActions.SET_STUDENT
    payload: IStudents
}

export interface SetStudents {
    type: StudentActions.SET_STUDENTS
    payload: IStudents[]
}

export interface EditStudent {
    type: StudentActions.EDIT_STUDENTS
    payload: IStudents
}

export interface DeleteStudent {
    type: StudentActions.DELETE_STUDENTS
    payload: string
}

export interface SetIsError {
    type: StudentActions.SET_IS_ERROR
    payload: string
}

export interface SetSearch {
    type: StudentActions.SET_SEARCH
    payload: string
}

export interface SetTableIsLoading {
    type: StudentActions.SET_IS_TABLE_LOADING
    payload: boolean
}

export type StudentAction =
    | SetStudent
    | SetStudents
    | EditStudent
    | DeleteStudent
    | SetIsError
    | SetSearch
    | SetTableIsLoading
