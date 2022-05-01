type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: UserAddressType
}

type UserAddressType = {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: UserGeoType
}

type UserGeoType = {
    lat: string
    lng: string
}

export interface UserState {
    users: UserType[]
    loading: boolean
    error: string | null
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: []
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
