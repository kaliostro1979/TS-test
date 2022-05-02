import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../store/action-creators/posts";
import {Link, useNavigate, useParams} from "react-router-dom"


const PostsList: React.FC = () => {
    const {posts, loading, error} = useTypedSelector(state => state.posts)
    const dispatch = useDispatch()
    const paramsId = useParams().id
    const history = useNavigate()

    const clickHandler = (id)=>{
        history(`/comments/${id}`)
    }

    useEffect(() => {
        dispatch<any>(fetchPosts(undefined))
    }, [dispatch, paramsId])

    if (loading) {
        return <h1>Loading Posts...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={"PostsWrapper"}>
            <h3 className={"PostsAuthorId"}>All Posts</h3>
            <ul className={"PostsList"}>
            {
                posts.length && posts.map(post => {
                    return (
                        <li className={"PostsListItem"} key={post.id} onClick={()=>clickHandler(post.id)}>
                            <p className={"PostsListItemId"}>Post N {post.id}</p>
                            <Link to={`/posts/${post.userId}`}>User ID: <span>{post.userId}</span></Link>
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
