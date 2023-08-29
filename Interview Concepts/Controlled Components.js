// controlled components in react
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
