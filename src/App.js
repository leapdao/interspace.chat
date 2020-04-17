import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { BrowserView } from "react-device-detect";

import Space from "./components/Space";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import RootContextProvider from "./contexts/RootContext";
import SpaceContext from "./contexts/SpaceContext";

import Header from "./components/Header";

const Wrapper = styled("div")`
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;

  a {
    color: ${(props) => props.theme.highlight};
  }
`;

function App() {
  return (
    <Wrapper className="App">
      <RootContextProvider>
        <SpaceContext>
          <BrowserView>
            <Header />
          </BrowserView>
          <Space />
        </SpaceContext>
        <Global
          styles={css`
            * {
              margin: 0px;
              padding: 0px;
              font-family: "Helvetica Neue", Arial, sans-serif;
              font-weight: 300;
              font-size: 14px;
            }
            body {
              margin: 0px;
              padding: 0px;
            }
            .click-zone {
              transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

              & :hover {
                text-shadow: 10px 10px 10px black;
                filter: saturate(0%);
                cursor: pointer;
              }
            }
          `}
        />
        <FloatingRoomWindow />
      </RootContextProvider>
    </Wrapper>
  );
}

export default App;
