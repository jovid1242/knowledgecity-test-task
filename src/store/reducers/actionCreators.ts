import { AuthActionCreators } from "./auth/actionCreators"
import { StudentActionCreators } from "./students/actionCreators"

export const allActionCreators = {
    ...AuthActionCreators,
    ...StudentActionCreators,
}
