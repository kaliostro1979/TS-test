import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../store/action-creators/posts";
import {useParams, useSearchParams} from "react-router-dom"


const PostsList: React.FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()
    const paramsId = useParams().id

    useEffect(() => {
        dispatch<any>(fetchPosts(paramsId))
    }, [dispatch, paramsId])

    if (loading) {
        return <h1>Loading Posts...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={"PostsWrapper"}>
            <h3 className={"PostsAuthorId"}>Post of user N {paramsId}</h3>
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
