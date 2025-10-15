import React from 'react'
import "./Button.css"

const Button = ({content, onClick, color = "#fff", type = "", variant = ""}) => {
    return (
        <button className='Button' type={type} data-variant={variant} style={{backgroundColor: color}} onClick={onClick}>{content}</button>
    )
}

export default Button