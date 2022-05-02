import {Dispatch} from "redux";
import {PostsActions, PostsTypes} from "../../types/posts";
import axios from "axios"

export const fetchPosts = (userId: number | string | undefined) => {

    return async (dispatch: Dispatch<PostsActions>) => {
        try {
            dispatch({type: PostsTypes.FETCH_POST})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts${userId ? "?userId=" : ""}${userId ? userId : ""}`)
            dispatch({type: PostsTypes.FETCH_POST_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: PostsTypes.FETCH_POST_ERROR, payload: "Posts not loaded"})
        }
    }
}
