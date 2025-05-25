import { Component } from "react";
import { StickerList } from "../List/StickerList";
import { styled } from "styled-components";
import stickers from "./stickers.json";

const Wrapper__title = styled.h1`
  font-size: 30px;
  margin-top: 20px;
`;

export class Sticker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Wrapper__title>Stickers:</Wrapper__title>
        <StickerList data={stickers} />
      </>
    );
  }
}
