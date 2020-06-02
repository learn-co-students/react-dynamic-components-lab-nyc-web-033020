//your code here
import React, { Component} from 'react'

export default class Comment extends Component {
    render(){
        // when writing code in jsx curly braces means we are using js not jsx
        return (
        <div className="comment">
            {this.props.commentText}
        </div>
        )
    }
}
