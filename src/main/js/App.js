import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import Header from "../../../frontendApp/src/components/layout/Header";
import RegistarUser from "../../../frontendApp/src/components/Register-user/RegisterUser"
import Users from '../../../frontendApp/src/components/Users/Users'
import axios from "axios";
import '../resources/static/main.css'

const App = ()=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUser();
    },[])

    const getUser = ()=>{
        axios.get('/user/all')
        .then(
            response =>setUsers(response.data)
        );
    }

    const addUser = (user)=>{   //why is it taking a parameter
        axios.post('/user/save', user)
        .then(
            (reponse)=>{
                setUsers(
                    [...users, reponse.data]
                )
            }
        )
    }

    const removeUser = ()=>{
        axios.delete(`/user/${id}`)
        .then(
            ()=>{
                //updating ui
                setUsers(
                    users.filter(
                        (user) => user.id !== id
                    )
                )
            }
        )
    }
        return( 
            <div>
                <Header title = "User Registration Details"/>
                <RegistarUser addUser = {addUser}/>
                <Users users = {users} removeUser={removeUser}/>
            </div>
        )
    }

export default App;
 const root = createRoot( document.getElementById('root'));
 root.render(<App/>)