import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../store/action-creators/posts";

interface userIdType {
    userId?: number | null
    name?: string | null
}

const PostsList: React.FC<userIdType> = ({userId}) => {
    const {posts, loading, error} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(fetchPosts(userId))
    }, [dispatch, userId])

    if (loading) {
        return <h1>Loading Posts...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={"PostsWrapper"}>
            <h3 className={"PostsAuthorId"}>Post of user N {userId}</h3>
            <ul className={"PostsList"}>
            {
                posts.length && posts.map(post => {
                    return (
                        <li className={"PostsListItem"} key={post.id}>
                            <p className={"PostsListItemId"}>Post N {post.id}</p>
                            <h3 className={"PostsListItemTitle"}>{post.title}</h3>
                            <p className={"PostsListItemBody"}>{post.body}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default PostsList;
