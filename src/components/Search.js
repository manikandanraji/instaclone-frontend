import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const InputWrapper = styled.input`
	padding: 0.4rem 0.6rem;
	background: ${props => props.theme.bg};
	border: 1px solid ${props => props.theme.borderColor};
	font-family: "Fira Sans", sans-serif;
	font-size: 1rem;
	border-radius: ${props => props.theme.borderRadius};
`;

const Search = () => {
	const searchterm = useInput('')

	const handleSearch = e => {
		if(e.keyCode === 13) {
			console.log(searchterm.value)
			searchterm.setValue('')
		}
	}

	return (
		<InputWrapper
			type="text"
			value={searchterm.value}
			onKeyDown={handleSearch}
			onChange={searchterm.onChange}
			placeholder="Search"
		/>
	);
};

export default Search;
