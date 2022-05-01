import {combineReducers} from "redux";
import {UserReducer} from "./userReducer";
import {postsReducer} from "./posts";
import {userIdReducer} from "./userId";

export const rootReducer = combineReducers({
    users: UserReducer,
    posts: postsReducer,
    userId: userIdReducer
})

export type RootState = ReturnType<typeof rootReducer>
