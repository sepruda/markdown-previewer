import React, { Component } from 'react';

import Editor from './Editor';
import Previewer from "./Previewer";

class App extends Component {

  state = {
    input: ''
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({input: event.target.value})
  }

  render() {
    return (
    <div>
      <h1>Markdown previewer</h1>
      <Editor handleChange={this.handleChange} text={this.state.input}/>
      <Previewer markdown={this.state.input}/>
    </div>
    )
  }
}

export default App;
