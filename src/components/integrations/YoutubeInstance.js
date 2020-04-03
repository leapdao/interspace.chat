import React, { useState, useEffect, useContext } from 'react';
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext';

function YoutubeInstance({ roomData }) {
	const [youtubeRoom, setYoutubeRoom] = useState('2oSUnUpqg3E');
	const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
	const space = currentFloatingSpaces;

	useEffect(() => {
		if (space.indexOf('parallel-society') > -1) {
			setYoutubeRoom('2oSUnUpqg3E');
		} else if (space.indexOf('cryptoeconomics-lab') > -1) {
			setYoutubeRoom('16KSQjvVz7k');
		} else if (space.indexOf('metatrack') > -1) {
			setYoutubeRoom('97ieQ_tq98Q');
		} else {
			setYoutubeRoom('2oSUnUpqg3E');
		}
		return console.log(youtubeRoom);
	}, [space, youtubeRoom]);
	return (
		<iframe
			title='Youtube Livestream'
			width='100%'
			height='100%'
			src={`https://www.youtube.com/embed/${youtubeRoom}`}
			frameBorder='0'
			allow='autoplay; encrypted-media; picture-in-picture'
			allowFullScreen
		/>
	);
}

export default YoutubeInstance;
