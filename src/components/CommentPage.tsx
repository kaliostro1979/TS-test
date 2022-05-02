import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchComments} from "../store/action-creators/comment";
import {useParams} from "react-router-dom";

const CommentPage = () => {
    const {comments, loading, error} = useTypedSelector(state => state.comments)
    const dispatch = useDispatch()
    const paramsId = useParams().id

    useEffect(()=>{
        dispatch<any>(fetchComments(paramsId || undefined))
    },[dispatch, paramsId])

    if (loading){
        return <h1>Loading Comments...</h1>
    }

    if (error){
        return <h1>Comments not loaded</h1>
    }

    return (
        <div className={"CommentsListWrapper"}>
            <h1>All comments for post-{paramsId}</h1>
            <ul className={"CommentsList"}>
                {
                    comments.length && comments.map((comment)=>{
                        return (
                            <li key={comment.id} className={"CommentsListItem"}>
                                <p className={"CommentsListItemId"}>Post ID: {comment.postId}</p>
                                <p className={"CommentsListItemEmail"}>Author email: <span>{comment.email}</span></p>
                                <h3 className={"CommentsListItemTitle"}>{comment.name}</h3>
                                <p className={"CommentsListItemBody"}>{comment.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default CommentPage;
