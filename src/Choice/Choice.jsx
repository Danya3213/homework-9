import { Component } from "react";
import { StickerList } from "../List/StickerList";
import { styled } from "styled-components";

const Wrapper__title = styled.h1`
  font-size: 30px;
  margin-top: 20px;
`;

export class Choice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStickers: JSON.parse(localStorage.getItem("activeStickers")),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        activeStickers: JSON.parse(localStorage.getItem("activeStickers")),
      });
    }, 300);
  }

  render() {
    return (
      <>
        <Wrapper__title>Choice:</Wrapper__title>
        <StickerList data={this.state.activeStickers} />
      </>
    );
  }
}
