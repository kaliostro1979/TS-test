import {GetUserIdType, UserId, UserIdType} from "../../types/userId";

const initialState: UserId = null

export const userIdReducer = (state=initialState, action:UserIdType) => {
    switch (action.type){
        case GetUserIdType.GET_USER_ID:
            return action.payload
        default:
            return state
    }
}
