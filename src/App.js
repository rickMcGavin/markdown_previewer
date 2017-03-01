import React, { Component } from 'react';
import './css/App.css';
let marked = require('marked');

let App = React.createClass ({

  getInitialState: function() {
    return {output: '',
            showHideEditor: 'show'
          }
  },

  update: function() {
    this.setState({output: this.refs.text.value})
  },

  toggleEditor: function() {
    if (this.state.showHideEditor === 'show') {
      this.setState({showHideEditor: 'hidden'});
      this.refs.view.style.width = '95vw';
    } else {
      this.setState({showHideEditor: 'show'});
      this.refs.view.style.width = '45vw';
    }
  },


  render() {
    return (
      <div className="App">
        <div className="App-header">
        <button onClick={this.toggleEditor}>Toggle Editor</button>
          <h2>Markdown Previewer</h2>
        </div>
        <div className="row">
          <textarea onInput={this.update} ref='text' className={this.state.showHideEditor}></textarea>
          <div className='view' ref='view' dangerouslySetInnerHTML={{__html: marked(this.state.output)}}></div>
        </div>
      </div>
    );
  }
});

export default App;
