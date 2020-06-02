import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // this.props.opacity, figure out logic before jsx
    let reduction;
    if (this.props.opacity >= 0.2) {
      reduction = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      return null
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* your conditional code here! */}
        {reduction}
      </div>
    )
  }

}

