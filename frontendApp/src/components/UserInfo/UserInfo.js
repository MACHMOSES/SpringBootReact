import React from "react";

import PropTypes from "prop-types";

const UserInfo = ({ user, removeUser }) => {
  const { id, name, surname, email, username } = user;
  const inforStyle = {
    backgroundColor: id % 2 === 0 ? "#0b2b8bcc" : "",
    padding: "10px",
    borderBottom: "1px #a23e3e dotted",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "20px",
    marginRight: "20px",
  };

  const deleteUser = (id) => {
    removeUser(id);
  };
  return (
    <div className="card mb-3 shadow-sm" style={inforStyle}>
    <div className="card-body">
      <div className="row align-items-center">
        <div className="col-md-10">
          <p className="mb-1">
            <strong>ID:</strong> {id}
          </p>
          <p className="mb-1">
            <strong>Name:</strong> {name} {surname}
          </p>
          <p className="mb-1">
            <strong>Email:</strong> {email}
          </p>
          <p className="mb-0">
            <strong>Username:</strong> {username}
          </p>
        </div>
        <div className="col-md-2 text-end">
          <button className="btn btn-outline-danger btn-sm" onClick={() => deleteUser(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
UserInfo.propTypes = {
  user: PropTypes.object,
  removeUser: PropTypes.func.isRequired,
};
export default UserInfo;
