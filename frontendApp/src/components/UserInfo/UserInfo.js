import react from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import './accountInfoStyle.css'
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
 import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';


const UserInfo = ({user, removeUser})=>{
    const {id, name, surname, email, username} = user;
    const inforStyle = {
        backgroundColor: (id%2) ==0? '#c8d4f7cc': '',
        padding: '10px',
        borderBottom: '1px #ccc datted',
        display: 'flex',
        alignItem: 'center',
        justifyContent:'flex-start',
        marginLeft: '20px',
        marginRight:'20px'
    }
    // run npm or using yarn npm install @material-ui/core
    //this help you use icons
    const deleteUser = (id)=>{
        removeUser(id);
    }
    return (

        <div style = {inforStyle}>
            <div className= 'accountInfoStyle'>
                // <AccountCircleIcon style = {{color: '#138a04', margin:'0px 10px 0px 0px'}}/>
                <p>{name}</p>
                &nbsp;
                <p>{surname}</p>
            </div>
            <p>{email}</p>
            <p>{username}</p>
            <div className='userAccountButtom'>
                <IconButton style = {{color: '#888990'}}>
                    <CreateIcon/>
                </IconButton>

                <IconButton color = 'secondray' onClick = {(e)=>deleteUser(id)}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </div>
    )
}
UserInfo.propType = {
    user: PropTypes.object,
    removeUser: PropTypes.func.isRequired
}
export default UserInfo;