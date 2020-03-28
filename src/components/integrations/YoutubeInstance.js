import React, { useState, useEffect, useContext } from "react";
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext";

function YoutubeInstance({ roomData }) {
  const [youtubeRoom, setYoutubeRoom] = useState("1didILpsp0s");
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
  const space = currentFloatingSpaces;

  useEffect(() => {
    if (space.indexOf("parallel-society") > -1) {
      setYoutubeRoom("1didILpsp0s");
    } else if (space.indexOf("cryptoeconomics-lab") > -1) {
      setYoutubeRoom("1didILpsp0s");
    } else if (space.indexOf("metatrack") > -1) {
      setYoutubeRoom("1didILpsp0s");
    } else {
      setYoutubeRoom("1didILpsp0s");
    }
    return console.log(youtubeRoom);
  }, [space, youtubeRoom]);
  return (
    <iframe
      title="Youtube Livestream"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${youtubeRoom}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeInstance;
