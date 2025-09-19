import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import PropTypes from 'prop-types'
const Users = ({users, removeUser})=>{
    return (
        
            <div>
                {users.map((user) =>{
                 return (<UserInfo user = {user} removeUser={removeUser} key={user.id}/>);  
                    
                })}
            </div>
    )
}

Users.prototypes = {
    users: PropTypes.array,
    removeUser: PropTypes.func.isRequired
}

export default Users;