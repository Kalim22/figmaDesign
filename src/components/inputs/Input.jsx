import React from 'react'
import './input.css'

function Input({ type, placeholder, value, onChange, name, required, className, width, multiple }) {
    return (
        <input
            className={className}
            style={{width: width || '100%'}}
            type={type || 'text'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required || true}
            multiple={multiple}
        />

    )
}

export default Input
