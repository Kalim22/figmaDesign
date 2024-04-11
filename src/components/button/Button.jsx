import React from 'react'
import './button.css'

function Button({ className, type, buttonText, disable, width, background, border, color, onClick }) {
    return (
        <button
            className={className}
            type={type || 'button'}
            disabled={disable || false}
            style={{
                width: width || '100%',
                background: background,
                border: border,
                color: color
            }}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
}

export default Button
