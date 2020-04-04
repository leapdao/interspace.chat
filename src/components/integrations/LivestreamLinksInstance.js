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
`;

const ParagraphStyled = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	max-width: 80%;
	line-height: 1.5rem;
	margin: 0 auto;
	padding: 1rem;
	justify-items: space-between;
	grid-gap: 1rem;
`;

const LinkStyled = styled.a`
    
}`;

function LivestreamLinksInstance() {
	return (
		<Container>
			<p>Direct links to the youtube streams of our conference tracks:</p>
			<ParagraphStyled>
				<LinkStyled
					href='https://youtu.be/2oSUnUpqg3E'
					target='_blank'
					rel='noopener noreferrer'>
					parallel-society
				</LinkStyled>{' '}
				<LinkStyled
					href='https://youtu.be/16KSQjvVz7k'
					target='_blank'
					rel='noopener noreferrer'>
					cryptoeconomics-lab
				</LinkStyled>{' '}
				<LinkStyled
					href='https://youtu.be/97ieQ_tq98Q'
					target='_blank'
					rel='noopener noreferrer'>
					metatrack
				</LinkStyled>{' '}
			</ParagraphStyled>
		</Container>
	);
}

export default LivestreamLinksInstance;
