import {combineReducers} from "redux";
import {UserReducer} from "./userReducer";
import {postsReducer} from "./posts";
import {userIdReducer} from "./userId";
import {commentReducer} from "./comment";

export const rootReducer = combineReducers({
    users: UserReducer,
    posts: postsReducer,
    userId: userIdReducer,
    comments: commentReducer
})

export type RootState = ReturnType<typeof rootReducer>
