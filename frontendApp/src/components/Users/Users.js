import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import PropTypes from 'prop-types'
const Users = ({users, removeUser})=>{
    return (
        
            <div>
                {users.map((user) =>{
                    <UserInfo user = {user} removeUser={props.removeUser } key={user.id}/>
                })}
            </div>
    )
}

Users.prototypes = {
    users: PropTypes.array,
    removeUser: PropTypes.func.isRequired
}

export default Users;