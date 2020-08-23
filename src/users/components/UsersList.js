import React, { useState, useEffect } from "react";

function UsersList() {
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
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    )
}

export default UsersList;
