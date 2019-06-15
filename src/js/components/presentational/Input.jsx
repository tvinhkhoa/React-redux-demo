import React from "react";
import PropTypes from "prop-types";

/*C1*/
/*
const Input = ({ label, text, type, id, value, placeholder='', handleChange = () => {}, inputRef='' }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
          type={type}
          className="form-control"
          id={id}
          value={value}
          placeholder=""
          onChange={handleChange}
          required
          ref={inputRef}
        />
    </div>
);
*/

{ /*C2*/ }
const Input = React.forwardRef((props, ref) => (
    <div className="form-group">
        <label htmlFor={props.label}>{props.text}</label>
        <input
          type={props.type}
          className="form-control"
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          required
          ref={ref}
        />
    </div>
));


Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Input;