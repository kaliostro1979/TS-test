type Posts = {
    userId: number
    id: number
    title: string
    body: string
}


export interface PostsState {
    posts: Posts[]
    loading: boolean
    error: string | null
}

export enum PostsTypes {
    FETCH_POST = "FETCH_POST",
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_ERROR = "FETCH_POST_ERROR"
}

interface FetchPosts {
    type: PostsTypes.FETCH_POST
}

interface FetchPostsSuccess {
    type: PostsTypes.FETCH_POST_SUCCESS
    payload: []
}

interface FetchPostsError {
    type: PostsTypes.FETCH_POST_ERROR
    payload: string | null
}

export type PostsActions = FetchPosts | FetchPostsSuccess | FetchPostsError
