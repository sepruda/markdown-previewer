import React from 'react';

const editor = (props) => (
    <div>
        <h3>Editor</h3>
        <textarea id="editor" onChange={props.handleChange} value={props.text}></textarea>
    </div>
    
);

export default editor