import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

const inputRef = React.createRef();
class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seo_title: "",
            inputValue: "",
            isAdding: false
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
        this.setState(this.state);

        this._input.focus();
        this.toggle();

        // input redux
        this.props.handleAdd(note);
    }

    toggle() {
        this.state.isAdding = !this.state.isAdding;
        this.setState(this.state);
    }

    render() {
        const {seo_title} = this.state;
        if (this.state.isAdding)
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

export default FormContainer;