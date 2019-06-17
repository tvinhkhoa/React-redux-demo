import React, { Component } from "react";
import ReactDOM from "react-dom";
import Note from "./Note.jsx";
import FormContainer from "./FormContainer.jsx";
import { connect } from 'react-redux';

class List extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {mang: ['Android', 'iOS', 'NodeJS']};
    // }

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
                <FormContainer/>
                {this.props.mang.map((e,i) => {
                    return <Note index={i} key={i}>{e}</Note>;
                })}
            </div>
        )
    }
}

export default connect(function(state){
    return {mang: state.mang}
})(List);