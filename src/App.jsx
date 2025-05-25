import { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { Choice } from "./Choice/Choice";
import { Sticker } from "./Skicker/Sticker";

const GlobalStyle = createGlobalStyle`
body {
  background-color: darkslategrey;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  color: darkslategrey;
  list-style: none;
  font-family: "Courier New", Courier, monospace;
}

.wrapper {
  background-color: beige;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  gap: 30px;
}
`

export default class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Choice />
        <Sticker />
      </>
    );
  }
}
