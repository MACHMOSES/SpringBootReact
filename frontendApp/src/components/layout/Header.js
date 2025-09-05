import React from 'react'
import PropTypes from 'prop-types'

function Header(props){
    const title = props.title;
    return(
        <header> 
            <h2 className='header'>{title}</h2>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
 
export default Header;
