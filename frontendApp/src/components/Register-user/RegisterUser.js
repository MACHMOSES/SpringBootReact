import React, { useState } from "react";
import InputRow from "../Row/InputRow";
import Buttonsubmit from "../Button/Buttonsubmit";
import PropTypes from "prop-types";

const RegistarUser = ({ addUser }) => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user["password"] === user["confirm_password"]) {
      addUser(user);
      setUser({
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
      });
    } else {
      console.log("Password does not match");
    }
  };
  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      <div className="card-body">
        <h5 className="fw-bold mb-3">Register User</h5>
        <form onSubmit={onSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <InputRow label="Name">
                <input
                  type="text"
                  name="name"
                  value={user["name"]}
                  placeholder="Type Name"
                  onChange={handleInputChange}
                />
              </InputRow>
            </div>
            <div className="col-md-6">
              <InputRow label="Surname">
                <input
                  type="text"
                  name="surname"
                  value={user["surname"]}
                  placeholder="Type Surname"
                  onChange={handleInputChange}
                />
              </InputRow>
            </div>
            <div className="col-md-6">
              <InputRow label="Email">
                <input
                  type="email"
                  name="email"
                  value={user["email"]}
                  placeholder="Type Email"
                  onChange={handleInputChange}
                />
              </InputRow>
            </div>
            <div className="col-md-6">
              <InputRow label="Username">
                <input
                  type="text"
                  name="username"
                  value={user["username"]}
                  placeholder="Type Username"
                  onChange={handleInputChange}
                />
              </InputRow>
            </div>
            <div className="col-md-6">
              <InputRow label="Password">
                <input
                  type="password"
                  name="password"
                  value={user["password"]}
                  placeholder="Type Password"
                  onChange={handleInputChange}
                />
              </InputRow>
            </div>
            <div className="col-md-6">
              <InputRow label="Confirm Password">
                <input
                  type="password"
                  name="confirm_password"
                  value={user["confirm_password"]}
                  placeholder="Type Confirm Password"
                  onChange={handleInputChange}
                />
              </InputRow>
            </div>
          </div>

          <div className="mt-3">
            <Buttonsubmit />
          </div>
        </form>
      </div>
    </div>
  );
};
RegistarUser.propType = {
  addUser: PropTypes.func.isRequired,
};

export default RegistarUser;
