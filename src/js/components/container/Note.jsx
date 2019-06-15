import React, { Component } from "react";
import ReactDOM from "react-dom";

class Note extends React.Component {
    removeNote() {
        const {index, handleRemove} = this.props;
        handleRemove(index);
    }

    render() {
        return  (
            <div>
                <p>{this.props.children}</p>
                { /* <button onClick={this.props.handleRemove}>Delete</button> */ }
                <button onClick={this.removeNote.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default Note;