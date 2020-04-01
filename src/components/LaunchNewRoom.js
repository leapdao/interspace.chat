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
	background: unset;
`;

const EnterRoomName = styled.form``;

const InputStyled = styled.input`
	background-color: white;
	color: black;
	z-index: 100;
`;

const LabelStyled = styled.div`
	padding: 1rem;
	color: whitesmoke;
`;

const ErrorStyled = styled.div`
	padding: 1rem;
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
				<InputStyled
					name='roomName'
					type='text'
					placeholder='Infinite Jest'
					ref={register({ required: true })}
				/>
				<InputStyled type='submit' />
				{errors.roomName && <ErrorStyled>A room name is required.</ErrorStyled>}
			</EnterRoomName>
		</Container>
	);
}
