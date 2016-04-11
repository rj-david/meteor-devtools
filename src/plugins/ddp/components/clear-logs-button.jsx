import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes : {
    onClearClick : PropTypes.func.isRequired
  }, 
  onClick (){
    this.props.onClearClick();
  },
  render (){
    return (
      <button onClick={this.onClick} className="toolbar-item clear-traces">
        <div className="toolbar-glyph"></div>
        <div className="tooltip">Clear Traces</div>
      </button>
    )
  }
});