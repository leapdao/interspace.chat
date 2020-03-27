import React, { useRef, useEffect } from "react";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const NewRoomJitsiInstance = ({ roomData }) => {
  const root = useRef(null);
  const roomObject = {
    "new room": {
      jitsi: {
        domain: "portal.interspace.chat",
        roomName: { roomData }
      }
    }
  };

  useEffect(() => {
    const options = {
      roomName: roomData,
      width: "100%",
      height: "100%",
      parentNode: root.current,
      interfaceConfigOverwrite: {
        defaultLanguage: `de`,
        TOOLBAR_ALWAYS_VISIBLE: "true",
        INITIAL_TOOLBAR_TIMEOUT: 200000,
        TOOLBAR_BUTTONS: [
          "microphone",
          "camera",
          "closedcaptions",
          "desktop",
          "fullscreen",
          "fodeviceselection",
          "hangup",
          "profile",
          "info",
          "recording",
          "livestreaming",
          "etherpad",
          "sharedvideo",
          "settings",
          "raisehand",
          "videoquality",
          "filmstrip",
          "invite",
          "feedback",
          "stats",
          "shortcuts",
          "tileview",
          "download",
          "help",
          "mute-everyone"
        ]
      }
    };
    const api = new JitsiMeetExternalAPI("portal.interspace.chat", options);

    // api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  }, [roomData]);

  return <div ref={root} style={{ height: "100%" }}></div>;
};

export default NewRoomJitsiInstance;
