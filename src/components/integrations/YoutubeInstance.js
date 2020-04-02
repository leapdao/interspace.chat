import React, { useState, useEffect, useContext } from 'react';
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext';

function YoutubeInstance({ roomData }) {
	const [youtubeRoom, setYoutubeRoom] = useState('1yXGoPVPk88');
	const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
	const space = currentFloatingSpaces;

	useEffect(() => {
		if (space.indexOf('parallel-society') > -1) {
			setYoutubeRoom('1yXGoPVPk88');
		} else if (space.indexOf('cryptoeconomics-lab') > -1) {
			setYoutubeRoom('GpwK_lHYv3Q');
		} else if (space.indexOf('metatrack') > -1) {
			setYoutubeRoom('2oSUnUpqg3E');
		} else {
			setYoutubeRoom('1yXGoPVPk88');
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
			allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
		/>
	);
}

export default YoutubeInstance;
