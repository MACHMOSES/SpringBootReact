import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import Header from "../components/layout/Header";
import RegistarUser from "../components/Register-user/RegisterUser"
import Users from '../components/Users/Users'
import axios from 'axios'
// import '../../main/resources/static/main.css'

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
        // the function will take a parameter as the user who is to be save
    const addUser = (user)=>{  
        axios.post('/user/save', user)
        .then(
            (reponse)=>{
                setUsers(
                    [...users, reponse.data]
                )
            }
        )
    }

    const removeUser = (id)=>{
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
                <Users users={users} removeUser={removeUser} getUser ={getUser}/>
            </div>
        )
    }

export default App;
 const root = createRoot( document.getElementById('root'));
 root.render(<App/>)