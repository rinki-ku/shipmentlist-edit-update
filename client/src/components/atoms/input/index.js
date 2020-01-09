import React from 'react';
import './style.css';
import constants from '../../../constants'

const input = ({type, handleChange, placeholder, ...props}) => {
    return(
        <>
        <input 
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            {...props}
        />
        </>
    )
}

export default input;