import React, { Component } from "react";
import ReactDOM from "react-dom";
import Note from "./Note.jsx";
import FormContainer from "./FormContainer.jsx";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {mang: ['Android', 'iOS', 'NodeJS']};
    }

    removeNote(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    addNote(note) {
        if (note) {
            this.state.mang.push(note);
            this.setState(this.state);
        }
    }

    render() {
        return (
            <div>
                <FormContainer handleAdd={this.addNote.bind(this)} />
                {this.state.mang.map((e,i) => {
                    return <Note index={i} key={i} handleRemove={this.removeNote.bind(this)}>{e}</Note>;
                })}
            </div>
        )
    }
}

export default List;