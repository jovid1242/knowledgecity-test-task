import axios from "axios"

// types & models
import { IUser } from "models/auth"
import {
    AuthActions,
    SetAuthAction,
    SetUserAction,
    SetIsLoading,
    SetIsError,
} from "./types"

// store
import { AppDispatch } from "store"
import { API_SERVER } from "apiUrl"

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActions.SET_USER,
        payload: user,
    }),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({
        type: AuthActions.SET_AUTH,
        payload: isAuth,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({
        type: AuthActions.SET_IS_LOADING,
        payload: isLoading,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: AuthActions.SET_IS_ERROR,
        payload: isError,
    }),
    login:
        (username: string, password: string) =>
        async (dispatch: AppDispatch) => {
            dispatch(AuthActionCreators.setIsLoading(true))
            try {
                await axios
                    .post(`${API_SERVER}/signin`, { username, password })
                    .then(({ data }) => {
                        if (data.token) {
                            localStorage.setItem("token", data.token)
                            localStorage.setItem("username", username)
                            dispatch(AuthActionCreators.setIsAuth(true))
                            dispatch(AuthActionCreators.setUser(data.username))
                        }
                    })
                    .catch((err) => {
                        dispatch(
                            AuthActionCreators.setIsError(
                                err.response.data.message
                            )
                        )
                    })
                    .finally(() => {
                        dispatch(AuthActionCreators.setIsLoading(false))
                    })
            } catch (e) {
                dispatch(
                    AuthActionCreators.setIsError("Произошла ошибка при логине")
                )
            }
        },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    },
}
