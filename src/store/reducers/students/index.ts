import { StudentActions, StudentAction, StudentState } from "./types"

const initialState: StudentState = {
    students: [],
    isError: "",
    search: "",
    tableIsLoading: false,
}

export default function contactReduser(
    state = initialState,
    action: StudentAction
): StudentState {
    switch (action.type) {
        case StudentActions.SET_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students],
            }
        case StudentActions.SET_STUDENTS:
            return {
                ...state,
                students: action.payload,
            }
        case StudentActions.EDIT_STUDENTS:
            return {
                ...state,
                students: state.students.map((student) =>
                    student.id === action.payload.id ? action.payload : student
                ),
            }
        case StudentActions.DELETE_STUDENTS:
            return {
                ...state,
                students: state.students.filter(
                    (elm) => elm.id !== action.payload
                ),
            }
        case StudentActions.SET_IS_ERROR:
            return { ...state, isError: action.payload }
        case StudentActions.SET_IS_TABLE_LOADING:
            return { ...state, tableIsLoading: action.payload }
        default:
            return state
    }
}
