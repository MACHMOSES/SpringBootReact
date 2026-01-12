import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import PropTypes from "prop-types";
const Users = ({ users, removeUser }) => {
  return (
    <div className="mt-4">
      <h3 className="fw-bold mb-3">Registered Users</h3>
      {users.length === 0 ? (
        <div className="alert alert-info">No users registered yet.</div>
      ) : (
      users.map((user) => {
        return <UserInfo  user={user} removeUser={removeUser} key={user.id} />;
      }))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  removeUser: PropTypes.func.isRequired,
};

export default Users;
