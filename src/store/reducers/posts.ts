import {PostsActions, PostsState, PostsTypes} from "../../types/posts";

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null
}

export const postsReducer = (state = initialState, action: PostsActions) => {
    switch (action.type) {
        case PostsTypes.FETCH_POST:
            return {posts: [], loading: true, error: null}
        case PostsTypes.FETCH_POST_SUCCESS:
            return {posts: action.payload, loading: false, error: null}
        case PostsTypes.FETCH_POST_ERROR:
            return {posts: [], loading: false, error: action.payload}
        default:
            return state
    }
}
