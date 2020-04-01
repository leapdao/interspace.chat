import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext';

import { RoomURLs } from '../../utils/constants';
import JitsiInstance from '../integrations/JitsiInstance';
import ChatInstance from '../integrations/ChatInstance';
// import YoutubeInstance from './integrations/YoutubeInstance';
// import HubInstance from './integrations/HubInstance';

const SERVICES = {
	jitsi: {
		title: 'Videochat',
		component: JitsiInstance
	},
	chat: {
		title: 'chat',
		component: ChatInstance
	}
};

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const ButtonContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	justify-content: space-between;
`;

const LivestreamButton = styled.button`
	grid-column: 1;
	min-height: 20px;
	color: whitesmoke;
	margin-top: 15px;
	background: unset;
	border: 1px solid whitesmoke;
	border-radius: 5px;
	:hover {
		cursor: pointer;
		color: black;
		background-color: white;
	}
`;

const ChatButton = styled.button`
	grid-column: 2;
	min-height: 20px;
	color: whitesmoke;
	justify-self: end;
	margin-top: 15px;
	background: unset;
	border: 1px solid whitesmoke;
	border-radius: 5px;
	:hover {
		cursor: pointer;
		color: black;
		background-color: white;
	}
`;

const RoomInstance = ({ space }) => {
	const { currentFloatingSpaces, addFloatingSpace } = useContext(
		FloatingSpaceContext
	);
	const roomURLs = RoomURLs[space];
	const availableServiceNames = Object.keys(SERVICES).filter(serviceName =>
		Object.keys(roomURLs).includes(serviceName)
	);

	const [selectedServiceName] = useState(availableServiceNames[0]);

	if (availableServiceNames.length === 0) return <div>Unknown room</div>;

	const roomData = roomURLs[selectedServiceName];
	const selectedService = SERVICES[selectedServiceName];
	const RoomServiceComponent = selectedService.component;

	return (
		<Container>
			<RoomServiceComponent roomData={roomData} />
			<ButtonContainer>
				{currentFloatingSpaces.indexOf('youtube') === -1 ? (
					<LivestreamButton onClick={() => addFloatingSpace('youtube')}>
						Watch Livestream for this room
					</LivestreamButton>
				) : null}
				{currentFloatingSpaces.indexOf('discord chat') === -1 ? (
					<ChatButton onClick={() => addFloatingSpace('discord chat')}>
						Open Chat for this room
					</ChatButton>
				) : null}
			</ButtonContainer>
		</Container>
	);
};

export default RoomInstance;
