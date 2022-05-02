type CommentsType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export interface CommentsState {
    comments: CommentsType[]
    loading: boolean
    error: string | null
}

export enum CommentsTypes {
    FETCH_COMMENTS = "FETCH_COMMENTS",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR"
}

interface FetchComments {
    type: CommentsTypes.FETCH_COMMENTS
}

interface FetchCommentsSuccess {
    type: CommentsTypes.FETCH_COMMENTS_SUCCESS
    payload: []
}

interface FetchCommentsError {
    type: CommentsTypes.FETCH_COMMENTS_ERROR
    payload: string | null
}

export type CommentsActionsTypes = FetchComments | FetchCommentsSuccess | FetchCommentsError

