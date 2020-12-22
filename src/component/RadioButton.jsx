import React from 'react'

export default function RadioButton({name, value,onChange, currentValue, label}) {
    return (
        <div className="form-check">
            <input
            className="form-ckeck-input"
             type="radio"
             name={name}
             id={value}
             onChange={onChange}
             defaultChecked={currentValue === {value}}
             />
             <label className="form-check-label" htmlFor={value}>
                 {label}
             </label>
            
        </div>
    )
}
