import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import {removeItem} from 'actions/action';

class Note extends React.Component {
    removeNote() {
        const {index, dispatch} = this.props;
        dispatch(removeItem(index));
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

export default connect()(Note);