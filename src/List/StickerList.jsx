import { Component } from "react";
import { StickerItem } from "./Item/StickerItem";
import { styled } from "styled-components";

const Wrapper__list = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

localStorage.setItem("activeStickers", JSON.stringify([]));

export class StickerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem("activeStickers")) || [],
    };
  }

  activeProducts(productId) {
    this.setState((prevState) => {
      const selectedProduct = this.props.data[productId];

      const isProductSelected = prevState.products.some(
        (product) => product.label === selectedProduct.label
      );

      if (isProductSelected) {
        return {
          products: prevState.products.filter(
            (product) => product.label !== selectedProduct.label
          ),
        };
      } else {
        return {
          products: [...prevState.products, selectedProduct],
        };
      }
    });

    setInterval(() => {
      localStorage.setItem(
        "activeStickers",
        JSON.stringify(this.state.products)
      );
    }, 300);
  }

  render() {
    return (
      <>
        <Wrapper__list>
          {this.props.data.map((item, index) => {
            const isActive = this.state.products.some(
              (product) => product.label === item.label
            );

            return (
              <StickerItem
                key={"sticker-" + index}
                index={index}
                img={item.img}
                label={item.label}
                onClick={this.activeProducts}
                isActive={isActive}
              />
            );
          })}
        </Wrapper__list>
      </>
    );
  }
}
