import React from 'react';

import marked from 'marked';
import classes from './Previewer.css';

class previewer extends React.Component {
    
    getMarkdownText() {
        let rawMarkup = marked(this.props.markdown, {sanitize: true});
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div className={classes.Previewer}>
                <label htmlFor="preview">Previewer</label>
                <div 
                    id='preview' 
                    dangerouslySetInnerHTML={this.getMarkdownText()}
                    className={classes.PreviewerWindow}
                    >
                </div>
            </div>
        )
    }
};

export default previewer