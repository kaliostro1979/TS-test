import React from 'react';
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import Home from "./components/Home";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {useTypedSelector} from "./hooks/useTypedSelector";


function App() {
    const userId = useTypedSelector(state=>state.userId)

    return (
        <div className={"Container"}>
            <BrowserRouter>
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/users"}>Users</NavLink>
                </nav>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/users"} element={<UsersList/>}/>
                    <Route path={`/posts/${userId}`} element={<PostsList userId={userId}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
