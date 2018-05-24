import React from 'react';
import './InputText.css';

const InputText = ({label, name, placeholder, handleChange, error = ''}) => (
    <div className="input">
        <label>{label}</label>
        <input type="text" name={name} placeholder={placeholder} onChange={handleChange} className={error.length > 0 ? 'input-error' : ''}/>
        {error.length > 0 ? <div className="label-error">{error}</div> : ''}
    </div>
);

export default InputText;