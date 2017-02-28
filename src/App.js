import React, { Component } from 'react';
import './css/App.css';
let marked = require('marked');

let App = React.createClass ({

  getInitialState: function() {
    return {output: ''}
  },

  update: function() {
    this.setState({output: this.refs.text.value})
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
          <div>
            <span className="right-arrow hidden">Switch View →</span>
          </div>
        </div>
        <div className="row">
          <textarea onInput={this.update} ref='text'></textarea>
          <div className="view" dangerouslySetInnerHTML={{__html: marked(this.state.output)}}></div>
        </div>
      </div>
    );
  }
});

export default App;
