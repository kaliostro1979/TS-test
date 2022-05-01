export type UserId = number | null

export enum GetUserIdType {
    GET_USER_ID = "GET_USER_ID"
}

interface UserIdAction {
    type: GetUserIdType.GET_USER_ID
    payload: number | null
}

export type UserIdType = UserIdAction
