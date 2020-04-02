import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	background-color: whitesmoke;
`;

const EnterRoomName = styled.form`
	display: grid;
	grid-template-rows: auto;
	grid-row-gap: 0.5rem;
`;

const InputStyled = styled.input`
	max-width: 250px;
`;

const LabelStyled = styled.label`
	padding: 1rem;
	color: black;
`;

const Inner = styled.div``;

const ErrorStyled = styled.span`
	padding: 1rem;
	color: black;
`;

export default function LaunchNewRoom() {
	const { register, handleSubmit, errors } = useForm();

	const openInNewTab = url => {
		let win = window.open(url, '_blank');
		win.focus();
	};

	const onSubmit = data => {
		openInNewTab(`https://portal.interspace.chat/${data.roomName}`);
	};

	return (
		<Container>
			<EnterRoomName onSubmit={handleSubmit(onSubmit)}>
				<LabelStyled htmlfor='roomName'>
					What shall your room be called?
				</LabelStyled>
				<Inner>
					<InputStyled
						name='roomName'
						type='text'
						placeholder='Infinite Jest'
						ref={register({ required: true })}
					/>
					<InputStyled type='submit' />
				</Inner>
				{errors.roomName && <ErrorStyled>A room name is required.</ErrorStyled>}
			</EnterRoomName>
		</Container>
	);
}
