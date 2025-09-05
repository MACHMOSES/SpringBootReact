import React, { useState } from 'react'
import InputRow from '../Row/InputRow';
import Buttonsubmit from '../Button/Buttonsubmit';
import '../Register-user/RegisterUser.css';
import PropTypes from 'prop-types';

const RegistarUser =({addUser})=>{
     const [user, setUser] = useState({
        name:"",
        surname:"",
        email:"",
        username:"",
        password:"",
        confirm_password:""
     })

     const handleInputChange = (e)=>{
        const {name, value} = e.target
        
        setUser({
            ...user,
            [name] : value
        })
     }

     const onSubmit = (e)=>{
        e.preventDefault();
        if(user['password'] === user['confirm_password']){
            addUser(user);
            setUser({
                'name':"",
                'surname':"",
                'email':"",
                'username':"",
                'password':"",
                'confirm_password':""
            })
        }else{
        console.log('Password does not match')
        }
     }
    return(
        <div className = "formcard"> 
            <form onSubmit={onSubmit}>
                   <div className='pill'> </div>
                   <br/>
                   <div className= 'row'>
                        <InputRow label = "Name">
                            <input
                            type = "text"
                            name = "name"
                            value = {user['name']}
                            placeholder=' type Name'
                            onChange = {handleInputChange}
                            />
                        </InputRow>

                        <InputRow label = "surname">
                            <input
                            type = "text"
                            name = "surname"
                            value = {user['surname']}
                            placeholder=' type Surname'
                            onChange = {handleInputChange}
                            />
                        </InputRow>
                        <InputRow label = "email">
                            <input
                            type = "text"
                            name = "email"
                            value = {user['email']}
                            placeholder=' type Email'
                            onChange = {handleInputChange}
                            />
                        </InputRow>
                        <InputRow label = "username">
                            <input
                            type = "text"
                            name = "username"
                            value = {user['username']}
                            placeholder=' type Username'
                            onChange = {handleInputChange}
                            />
                        </InputRow>
                        <InputRow label = "password">
                            <input
                            type = "text"
                            name = "password"
                            value = {user['password']}
                            placeholder='type Password'
                            onChange = {handleInputChange}
                            />
                        </InputRow>
                        <InputRow label = "confirm_password">
                            <input
                            type = "text"
                            name = "confirm_password"
                            value = {user['confirm_password']}
                            placeholder='type confirm_password'
                            onChange = {handleInputChange}
                            />
                        </InputRow>
                   </div>

                   <div className = 'button'>
                        <Buttonsubmit/>
                   </div>
            </form>
        </div>
    )
}
RegistarUser.propType = {
    addUser:PropTypes.func.isRequired
}

export default RegistarUser;