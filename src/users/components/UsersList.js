import React from "react";

function UsersList(props) {
    const { users }= props;

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
UsersList.defaultProps = {
    users: []
};

export default UsersList;
