import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
// import * as action from 'action';
import { toggle, addItem } from 'actions/action';
import Input from "../presentational/Input.jsx";

const inputRef = React.createRef();
class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seo_title: "",
            inputValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.state.inputValue = event.target.value;
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault(); // avoid submit

        const note = this._input.value;
        this.state.inputValue = this._input.value = "";
        this._input.focus();
        this.setState(this.state);

        const {dispatch} = this.props;
        dispatch(addItem(note));
        dispatch(toggle());
    }

    toggle() {
        // this.state.isAdding = !this.state.isAdding;
        // this.setState(this.state);
        var {dispatch} = this.props;
        dispatch(toggle());
    }

    render() {
        const {seo_title} = this.state;
        if (this.props.isAdding)
            return (
                <form id="article-form" onSubmit={this.handleSubmit.bind(this)}>
                    { /*C1*/ }
                    { /*
                    <Input
                        text="Title Note"
                        label="seo_title"
                        type="text"
                        id="seo_title"
                        value={seo_title}
                        handleChange={this.handleChange}
                        placeholder="Enter you text"
                        inputRef={(el) => {
                            this._input = el;
                        }}
                    />*/}
                    { /*
                    C2*/ }
                    <Input
                        text="Title Note"
                        label="seo_title"
                        type="text"
                        id="seo_title"
                        value={this.state.inputValue}
                        handleChange={this.handleChange}
                        placeholder="Enter you text"
                        ref={
                            (el) => this._input = el
                        }
                    />
                    <button className="btn btn-submit">Add</button>
                    <br /><br />
                </form>
            );
        return (
            <button onClick={this.toggle.bind(this)}> + </button>
        )
    }
}

export default connect(function(state) {
    return {isAdding: state.isAdding} // Share more
})(FormContainer);