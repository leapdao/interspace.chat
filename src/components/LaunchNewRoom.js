import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { SpaceContext } from "../contexts/SpaceContext";
import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import { RoomURLs } from "../utils/constants";

import JitsiInstanceMobile from "./integrations/JistiInstanceMobile";
import NewRoomJitsiInstance from "./integrations/NewRoomJitsiInstance";
import ChatInstance from "./integrations/ChatInstance";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: unset;
`;

const ChatButton = styled.button`
  min-height: 20px;
  max-width: 100px;
  color: black;
  align-self: flex-end;
  margin-top: 15px;
`;

const EnterRoomName = styled.form``;

const InputStyled = styled.input`
  background-color: white;
  color: black;
  z-index: 100;
`;

const LabelStyled = styled.label`
  padding: 1rem;
`;

const ErrorStyled = styled.div`
  padding: 1rem;
`;

export default function LaunchNewRoom() {
  const { currentSpace, setSpace } = useContext(SpaceContext);
  const { register, handleSubmit, errors } = useForm();

  const VideoComponent = data => {
    return <JitsiInstanceMobile roomData={data.roomName} />;
  };

  const onSubmit = data => {
    alert(JSON.stringify(data));
    console.log(data.roomName);
    VideoComponent(data);
  };

  return (
    <Container>
      <EnterRoomName onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled htmlfor="roomName">
          What shall your room be called?
        </LabelStyled>
        <InputStyled
          name="roomName"
          type="text"
          placeholder="Infinite Jest"
          ref={register({ required: true })}
        />
        <InputStyled type="submit" />
        {errors.roomName && <ErrorStyled>A room name is required.</ErrorStyled>}
      </EnterRoomName>
      <VideoComponent />
    </Container>
  );
}
