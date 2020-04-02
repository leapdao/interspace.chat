import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	background: whitesmoke;
	overflow-y: scroll;
`;

const ParagraphStyled = styled.p`
	max-width: 80%;
	line-height: 1.5rem;
	margin: 0 auto;
	text-align: justify;
	padding: 1rem;
`;

const StrongStyled = styled.strong`
	font-weight: 700;
`;

function DonateInstance() {
	return (
		<Container>
			<ParagraphStyled>
				NonCon is free, and non-coercive. <StrongStyled>Opt-in.</StrongStyled>{' '}
			</ParagraphStyled>
			<ParagraphStyled>
				If you feel like donating, we'll accept any token at the{' '}
				<a
					href='https://etherscan.io/address/noncon.eth'
					target='_blank'
					rel='noopener noreferrer'>
					noncon.eth
				</a>{' '}
				address, or you can contribute to our{' '}
				<a
					href='https://gitcoin.co/grants/516/interspacechat?tab=description'
					target='_blank'
					rel='noopener noreferrer'>
					interspace.chat gitcoin grant
				</a>{' '}
				and get those sweet sweet multiples during the 5th Matching Round. Those
				who don't have, or don't want a gitcoin account can donate directly to
				our{' '}
				<a
					href='https://etherscan.io/address/support.interspacechat.eth'
					target='_blank'
					rel='noopener noreferrer'>
					support.interspace.eth
				</a>{' '}
				ENS address.{' '}
			</ParagraphStyled>
			<ParagraphStyled>
				Although we have no production costs associated with a conference
				produced in meatspace, the hours of organization, pre-production and
				public communication are just as high as with a "normal" event.
			</ParagraphStyled>
			<ParagraphStyled>
				When the livestreams have ended, all individual talks will be available
				in edited form in playlists on our Youtube channel, so any donation you
				make will also be to the benefit of our videoslaves.
			</ParagraphStyled>
		</Container>
	);
}

export default DonateInstance;
