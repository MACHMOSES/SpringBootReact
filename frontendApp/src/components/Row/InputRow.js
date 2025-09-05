import React, { Children } from 'react';
import '../Row/InputRow.css'
import PropTypes from "prop-types";
const InputRow = ({ children, label }) => {
    const singleChild = Children.only(children);
    const hasInputElement = Children.map(children, child => {
        if(child.type === 'input')
            return true;
        return false;
    });
    return (
        <div className='container' >
            <p className='labelStyle'>{label}</p>
            <div className="styledInput" >
                {
                    hasInputElement[0] ? singleChild : new Error('an input element is required!')
                }
            </div>
        </div>
    );
}

InputRow.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired
}
export default InputRow;
