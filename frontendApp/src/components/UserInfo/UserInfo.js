
import React from "react";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./accountInfoStyle.css";
// import IconButton from "@material-ui/core/IconButton";
// import CreateIcon from "@material-ui/icons/Create";
// import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const UserInfo = ({ user, removeUser }) => {
  const { id, name, surname, email, username } = user;
  const inforStyle = {
    backgroundColor: id % 2 == 0 ? "#c8d4f7cc" : "",
    padding: "10px",
    borderBottom: "1px #ccc datted",
    display: "flex",
    alignItem: "center",
    justifyContent: "flex-start",
    marginLeft: "20px",
    marginRight: "20px",
  };

  const deleteUser = (id) => {
    removeUser(id);
  };
  return (
    <div style={inforStyle}>
      <div className="accountInfoStyle">
        <p>ID; {id}</p>
        &nbsp;
        <p>{name}</p>
        &nbsp;
        <p>{surname}</p>
      </div>
      <p>{email}</p>
      <p>{username}</p>
      <div>
        <button onClick={(e) => deleteUser(id)}>Delete</button>
      </div>
    </div>
  );
};
UserInfo.propType = {
  user: PropTypes.object,
  removeUser: PropTypes.func.isRequired,
};
export default UserInfo;

