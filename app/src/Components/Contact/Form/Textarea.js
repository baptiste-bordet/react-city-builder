import React from 'react';
import './Textarea.css';

const Textarea = ({label, name, placeholder, handleChange, error = '', type}) => (
    <div className="textarea">
        <label>{label}</label>
        <textarea name={name} placeholder={placeholder} onChange={handleChange} className={error.length > 0 ? 'input-error' : ''}/>
        {error.length > 0 ? <div className="label-error">{error}</div> : ''}
    </div>
);

export default Textarea;