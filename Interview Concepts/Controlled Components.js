// controlled components in react
// • these represent the traditional approach towards building form elements in react
// • the value of the form elements like input, text-area, etc is directly controlled by the component's state
// • meaning, the component's state serves as the single source of truth for the value of the input element

import React, { useState } from 'react';

function ControlledComponent() {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<input
			type="text"
			value={inputValue}
			onChange={handleChange}
		/>
	);
}
