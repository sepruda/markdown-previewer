import React from 'react';

import classes from './Editor.css';

const editor = (props) => (
    <div className={classes.Editor}>
        <label 
            htmlFor="editor">Editor
            <button onClick={props.clearInput}>clear</button>
        </label>
        <textarea 
            id="editor" 
            onChange={props.handleChange} 
            value={props.text}
            rows="17"
            //cols="80"
            className={classes.EditorWindow}
        >
        </textarea>
    </div>
    
);

export default editor