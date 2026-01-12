import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const titled = props.title;
  return (
    <header className="bg-primary text-white py-4 p-3 mb-4 rounded-3 shadow-sm">
    <div className="container text-center"> 
      <h2 className="mb-0 fw-bold">{titled}</h2>
    </div>  
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
