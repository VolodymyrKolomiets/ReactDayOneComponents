
// import React from 'react';
// import './UserMap.css'

// const Users = (props) => {
//     return (
//         <div className="user">
//             {props.users.map((user) => <p> Hola, me llamo {user.name} {user.lastName} y tengo {user.age} años. </p>)}
//         </div>
//     )
// }

// export default Users

import React from 'react';
import './UserMap.css';

const Users = (props) => {
    const userList = props.users.map((user, usersKey) =>
        <li key={usersKey} className='user'>Hola, me llamo {user.name} {user.lastName} y tengo {user.age} años.</li>
    );

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ol>{userList}</ol>
        </div>
    );
}

export default Users;