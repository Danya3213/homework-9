import { Component } from "react";
import { styled } from "styled-components";

const Wrapper__item = styled.li`
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  background-color: beige;
  border: 3px solid darkslategrey;

  &:hover:not(:active) {
    border: 3px solid transparent;
    background-color: darkslategrey;

    & > h3 {
      color: beige;
    }
  }
`;

const Wrapper__imgTitle = styled.h3`
  font-size: 25px;
  color: darkslategrey;
`;

export class StickerItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Wrapper__item onClick={() => this.props.onClick(this.props.index)}>
          <img
            className="wrapper__img"
            src={this.props.img}
            alt={this.props.label}
          />
          <Wrapper__imgTitle>{this.props.label}</Wrapper__imgTitle>
        </Wrapper__item>
      </>
    );
  }
}
