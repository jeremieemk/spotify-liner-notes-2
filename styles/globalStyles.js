import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// import bentonsansregular from "../public/fonts/bentonsansregular.otf";
// import bentonsansblack from "../public/fonts/bentonsansblack.otf";
// import bentonsansbook from "../public/fonts/bentonsansbook.otf";
// import bentonsansmedium from "../public/fonts/bentonsansmedium.otf";
// import bentonsansbold from "../public/fonts/bentonsansbold.otf";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family: regular;
    box-sizing: border-box
  }
`;

export const Button = styled.div`
  background-color: rgb(229, 255, 240);
  border-radius: 12px;
  padding: 22.5px 40.5px;
  color: rgb(34, 34, 34);

  cursor: pointer;
  &:hover {
    background-color: rgb(245, 245, 245);
    box-shadow: rgb(34, 34, 34) 2px 2px 0px 0px;
  }
  font-family: medium;
  border: 2px solid black;
`;

export const Heading = styled.h1`
  background-color: rgb(250, 199, 255);
  padding: 5px 10px;
  width: fit-content;
  font-family: medium;
  font-size: 2.3rem;
  letter-spacing: 4px;
`;
