import {GetUserIdType} from "../../types/userId";

export const userIdAction = (userId)=>{
    return {
        type: GetUserIdType.GET_USER_ID,
        payload: userId
    }
}
