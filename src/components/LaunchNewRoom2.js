import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import { RoomURLs } from "../utils/constants";
import JitsiInstance from "./integrations/JitsiInstance";
import ChatInstance from "./integrations/ChatInstance";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ChatButton = styled.button`
  min-height: 20px;
  max-width: 100px;
  color: black;
  align-self: flex-end;
  margin-top: 15px;
`;

const roomURLs = RoomURLs;

const NameRoom = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      roomName: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="roomName">roomName</label>
      <input
        id="roomName"
        name="roomName"
        type="roomName"
        onChange={formik.handleChange}
        value={formik.values.roomName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const Launch = formik => {
  const roomName1 = formik.values.roomName;
  const { addFloatingSpace } = useContext(FloatingSpaceContext);
  Object.keys(roomURLs).push(roomName1);
  addFloatingSpace(roomName1);
};

const LaunchNewRoom = () => {
  return (
    <Container>
      <NameRoom />
      <Launch />
    </Container>
  );
};

export default LaunchNewRoom;
