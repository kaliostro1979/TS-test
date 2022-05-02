import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {userIdAction} from "../store/action-creators/userId";
import {useNavigate} from "react-router-dom";
import {UserType} from "../types/users";


const UsersList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useNavigate()

    const clickHandler = (id: number)=>{
        dispatch(userIdAction(id))
        history(`/posts/${id}`)
    }

    useEffect(() => {
        dispatch<any>(fetchUsers())
    }, [dispatch])

    if (loading) {
        return <div><p>Loading...</p></div>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <ul className={"UsersList"}>
            {
                users.length && users.map((user: UserType) => {
                    return <li key={user.id} onClick={()=>clickHandler(user.id)} className={"UsersListItem"}>
                        <p className={"UserId"}><span className={"UserValue"}>ID:</span> {user.id}</p>
                        <p className={"UserNickName"}><span className={"UserValue"}>Username: </span>{user.username}</p>
                        <p className={"UserName"}><span className={"UserValue"}>Name: </span>{user.name}</p>
                        <p className={"UserEmail"}><span className={"UserValue"}>Email: </span>{user.email}</p>
                        <div className={"UserAddress"}>
                            <h3>User address</h3>
                            <p><span className={"UserValue"}>City:</span> {user.address.city}</p>
                            <p><span className={"UserValue"}>Street:</span> {user.address.street}</p>
                            <p><span className={"UserValue"}>Suite:</span> {user.address.suite}</p>
                            <p><span className={"UserValue"}>Zipcode:</span> {user.address.zipcode}</p>
                        </div>
                    </li>
                })
            }
        </ul>
    );

};

export default UsersList;
