

const Users =(props)=> {
    return (
        <div>{props.userInfo.map((user) => <span> Hola, me llamo {user.name} {user.lastName} y tengo {user.age} años. <br /></span> )}</div>
    )
  }

  export default Users
  