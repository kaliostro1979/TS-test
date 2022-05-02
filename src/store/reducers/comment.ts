import {CommentsActionsTypes, CommentsTypes, CommentsState} from "../../types/comments";

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null
}

export const commentReducer = (state = initialState, action: CommentsActionsTypes)=>{
    switch (action.type){
        case CommentsTypes.FETCH_COMMENTS:
            return {comments: [], loading: true, error: null}
        case CommentsTypes.FETCH_COMMENTS_SUCCESS:
            return {comments: action.payload, loading: false, error: null}
        case CommentsTypes.FETCH_COMMENTS_ERROR:
            return {comments: [], loading: false, error: action.payload}
        default:
            return state
    }
}
