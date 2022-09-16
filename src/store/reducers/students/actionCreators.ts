// store
import { AppDispatch } from "store"

// types & models
import { IStudents } from "models/students"
import {
    StudentActions,
    SetStudent,
    DeleteStudent,
    EditStudent,
    SetIsError,
    SetSearch,
    SetStudents,
    SetTableIsLoading,
} from "./types"

import axios from "axios"
import { API_SERVER } from "apiUrl"

export const StudentActionCreators = {
    setStudent: (student: IStudents): SetStudent => ({
        type: StudentActions.SET_STUDENT,
        payload: student,
    }),
    setStudents: (students: IStudents[]): SetStudents => ({
        type: StudentActions.SET_STUDENTS,
        payload: students,
    }),
    editStudent: (student: IStudents): EditStudent => ({
        type: StudentActions.EDIT_STUDENTS,
        payload: student,
    }),
    removeStudent: (id: string): DeleteStudent => ({
        type: StudentActions.DELETE_STUDENTS,
        payload: id,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: StudentActions.SET_IS_ERROR,
        payload: isError,
    }),
    setTableIsLoading: (isLoading: boolean): SetTableIsLoading => ({
        type: StudentActions.SET_IS_TABLE_LOADING,
        payload: isLoading,
    }),
    addStudentAsync: (student: IStudents) => async (dispatch: AppDispatch) => {
        try {
            axios.post(`${API_SERVER}/students/`).then(() => {
                dispatch(StudentActionCreators.setStudent(student))
            })
        } catch (e) {
            dispatch(
                StudentActionCreators.setIsError(
                    "Произошла ошибка при добавление"
                )
            )
        }
    },
    removeStudentAsync: (id: string) => async (dispatch: AppDispatch) => {
        try {
            axios.delete(`${API_SERVER}/students/${id}`).then(() => {
                dispatch(StudentActionCreators.removeStudent(id))
            })
        } catch (e) {
            dispatch(
                StudentActionCreators.setIsError(
                    "Произошла ошибка при удаление"
                )
            )
        }
    },
    editStudentAsync: (student: IStudents) => async (dispatch: AppDispatch) => {
        try {
            axios
                .put(`${API_SERVER}/students/${student.id}`, student)
                .then(() => {
                    dispatch(StudentActionCreators.editStudent(student))
                })
        } catch (e) {
            dispatch(
                StudentActionCreators.setIsError(
                    "Произошла ошибка при изменение"
                )
            )
        }
    },
    getStudents: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(StudentActionCreators.setTableIsLoading(true))
            axios
                .get(`${API_SERVER}/students`)
                .then(({ data }) => {
                    dispatch(StudentActionCreators.setStudents(data))
                })
                .finally(() => {
                    dispatch(StudentActionCreators.setTableIsLoading(false))
                })
        } catch {
            dispatch(
                StudentActionCreators.setIsError(
                    "Произошла ошибка при изменение"
                )
            )
        }
    },
    getStudent:
        (student_id: string | number) => async (dispatch: AppDispatch) => {
            try {
                return axios.get(`${API_SERVER}/students/${student_id}`)
            } catch {
                dispatch(
                    StudentActionCreators.setIsError(
                        "Произошла ошибка при изменение"
                    )
                )
            }
        },
}
