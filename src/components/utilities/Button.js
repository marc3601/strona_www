import React from 'react'
import './Button.css'
export default function Button({text, action}) {
    return (
        <button className="btn" onClick={action}>{text}</button>
    )
}
