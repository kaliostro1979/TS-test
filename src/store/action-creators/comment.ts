import {Dispatch} from "redux";
import {CommentsActionsTypes, CommentsTypes} from "../../types/comments";
import axios from "axios"

export const fetchComments = (id: number | string | undefined)=>{

    return async (dispatch: Dispatch<CommentsActionsTypes>)=>{
        try {
            dispatch({type: CommentsTypes.FETCH_COMMENTS})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            dispatch({type: CommentsTypes.FETCH_COMMENTS_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({type: CommentsTypes.FETCH_COMMENTS_ERROR, payload: "Comment not loaded"})
        }
    }
}
