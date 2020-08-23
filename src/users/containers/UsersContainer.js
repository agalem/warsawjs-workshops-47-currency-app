import React, {useEffect, useState} from "react";
import UsersList from "../components/UsersList";

function UsersContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setUsers(result);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <UsersList users={users}/>
        </div>
    )
}

export default UsersContainer;
