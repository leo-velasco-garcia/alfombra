import React from 'react'
import "./Button.css"

const Button = ({content, onClick, color = "#fff", type = "", variant = "", border}) => {
    return (
        <button className='Button' type={type} data-variant={variant} style={{backgroundColor: color, border: "2px solid" + border}} onClick={onClick}>{content}</button>
    )
}

export default Button