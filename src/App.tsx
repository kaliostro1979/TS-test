import React from 'react';
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import SingleUserPostsList from "./components/SingleUserPostsList";
import CommentPage from "./components/CommentPage";


function App() {

    return (
        <div className={"Container"}>
            <BrowserRouter>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/users"}>Users</NavLink>
                    <NavLink to={"/posts"}>Posts</NavLink>
                </nav>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/users"} element={<UsersList/>}/>
                    <Route path={`/posts`} element={<PostsList/>}/>
                    <Route path={`/posts/:id`} element={<SingleUserPostsList/>}/>
                    <Route path={`/comments/:id`} element={<CommentPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
