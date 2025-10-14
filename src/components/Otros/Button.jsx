import React from 'react'
import "./Button.css"

const Button = ({content, onClick, color = "#fff", type = ""}) => {
    return (
        <button className='Button' type={type} style={{backgroundColor: color, border: "1px solid black"}} onClick={onClick}>{content}</button>
    )
}

export default Button