import React from "react";
import styled, { css, keyframes } from "styled-components";

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
	overflow: hidden;
	animation: ${openModal} 0.5s ease-in-out;

	div.modal-content {
		width: ${props => props.width};
		height: ${props => props.height};
		background: ${props => props.theme.white};
		border-radius: 4px;
	}

	.modal-content img.post-preview {
		width: 100%;
		object-fit: cover;
	}

	${props =>
		props.center &&
		css`
			div.modal-content {
				margin: 6rem auto;
			}
		`}

	${props =>
		props.newpost &&
		css`
			@media screen and (max-width: 990px) {
				div.modal-content {
					width: 80%;
				}
			}

			@media screen and (max-width: 530px) {
				div.modal-content {
					margin: 4rem auto;
					width: 90%;
				}
			}
		`}
`;

const Modal = ({ children, newpost, center, width, height }) => {
	return (
		<ModalWrapper
			center={center}
			newpost={newpost}
			width={width}
			height={height}
		>
			<div className="modal-content">{children}</div>
		</ModalWrapper>
	);
};

export default Modal;
