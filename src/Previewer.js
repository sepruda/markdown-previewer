import React from 'react';

import marked from 'marked';

class previewer extends React.Component {
    
    getMarkdownText() {
        let rawMarkup = marked(this.props.markdown, {sanitize: true});
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div>
                <h3>Previewer</h3>
                <div id='preview' dangerouslySetInnerHTML={this.getMarkdownText()}></div>
            </div>
        )
    }
};

export default previewer