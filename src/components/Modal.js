import React from "react";
import styled, { keyframes } from "styled-components";

const openModal = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	overflow: auto;
	animation: ${openModal} 0.5s ease-in-out;

	div.modal-content {
		width: 700px;
		height: 500px;
		margin: 5rem auto;
		background: #fff;
		border-radius: 4px;
	}

	.modal-content img {
		width: 100%;
		height: 80%;
		object-fit: cover;
	}
`;

const Modal = ({ children }) => {

	return (
		<ModalWrapper>
			<div className="modal-content">{children}</div>
		</ModalWrapper>
	);
};

export default Modal;
