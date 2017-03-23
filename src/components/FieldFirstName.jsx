import React from "react";
import {Field} from "redux-form";

const FieldFirstName = (props) => {

	const {disabled, label, placeholder} = props;
	return (
		<div>
			<Field name="firstName" type="text" component={() => (<div>Hello World!</div>)}
			       label={label || "First name*"}
			       placeholder={placeholder || "Please enter your first name"}
			       validate={() => (undefined)}
			       disabled={disabled ? "disabled" : ""}/>
		</div>
	)
};

FieldFirstName.propTypes = {
	disabled: React.PropTypes.bool,
	label: React.PropTypes.string,
	placeholder: React.PropTypes.string
};

export default FieldFirstName;
